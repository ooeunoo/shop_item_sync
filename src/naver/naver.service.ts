import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios, { Axios } from 'axios';
import {
  CREATE_PRODUCT_ENDPOINT,
  ISSUE_TOKEN_ENDPOINT,
  NAVER_API_BASE_URL,
} from './naver.constant';
import * as bcrypt from 'bcrypt';
import * as querystring from 'querystring';
import { INaverToken } from './naver.interface';
import { CreateProductDto } from './dto/create_product.dto';

@Injectable()
export class NaverService implements OnModuleInit {
  private instance: Axios;
  constructor(private readonly configService: ConfigService) {}

  async onModuleInit() {
    const clientId = this.configService.get('NAVER_CLIENT_ID');
    const clientSecret = this.configService.get('NAVER_CLIENT_SECRET');

    const { timestamp, signature } = this._encryptSignature(
      clientId,
      clientSecret,
    );

    const { access_token: accessToken } = await this._issueToken(
      clientId,
      signature,
      timestamp,
    );

    this.instance = axios.create({
      baseURL: NAVER_API_BASE_URL,
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'content-type': 'application/json',
      },
    });
  }

  async createProduct(data: CreateProductDto) {
    const result = await this.instance.post(CREATE_PRODUCT_ENDPOINT, data);
    console.log(result);
  }

  /**
   * OAuth2.0 토큰 발급
   * @param clientId 네이버 커머스 클라이언트 아이디
   * @param signature 네이버 커머스 전자서명된 클라이언트 시크릿
   * @param timestamp 전자서명 타임스탬프
   * @returns (NaverToken)
   */
  async _issueToken(
    clientId: string,
    signature: string,
    timestamp: number,
  ): Promise<INaverToken> {
    const response = await axios.post(
      ISSUE_TOKEN_ENDPOINT,
      querystring.stringify({
        client_id: clientId,
        timestamp: timestamp,
        client_secret_sign: signature,
        grant_type: 'client_credentials',
        type: 'SELF',
      }),
    );
    return response.data;
  }

  /**
   * 전자서명
   * @param clientId 네이버 클라이언트 아이디
   * @param clientSecret 네이버 클라이언트 시크릿
   * @returns {timestamp: 전자서명 타임스탬프, signature: 전자서명 데이터}
   */
  _encryptSignature(
    clientId: string,
    clientSecret: string,
  ): { timestamp: number; signature: string } {
    // 현재 시간을 밀리초로 얻습니다.(13자리)
    const timestamp = Date.now();
    // 밑줄로 연결하여 password 생성
    const password = `${clientId}_${timestamp}`;
    // bcrypt 해싱
    const hashed = bcrypt.hashSync(password, clientSecret);
    // base64 인코딩
    return {
      timestamp,
      signature: Buffer.from(hashed, 'utf-8').toString('base64'),
    };
  }
}
