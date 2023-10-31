import { Injectable, OnModuleInit } from '@nestjs/common';
import {
  CONTENT_CLASS_SELECTOR,
  GO_TO_HOME_NAME_SELECTOR,
  LOGIN_BASE_URL,
  LOGIN_EMAIL_NAME_SELECTOR,
  LOGIN_PASSWORD_NAME_SELECTOR,
  LOGIN_QR_CODE_CLASS_SELECTOR,
  MAIN_IMAGE_CLASS_SELECTOR,
  OPTION_NAME_CLASS_SELECTOR,
  OPTION_VALUE_CLASS_SELECTOR,
  OPTION_VALUE_WRAP_CALSS_SELECTOR,
  OPTION_WRAP_CLASS_SELECTOR,
  TITLE_CLASS_SELECTOR,
} from './taobao.constant';
import { Builder, By, WebDriver, until, Browser } from 'selenium-webdriver';
import * as chrome from 'selenium-webdriver/chrome';
import { ConfigService } from '@nestjs/config';
import { TaobaoOption } from './taobao.interface';

@Injectable()
export class TaobaoService implements OnModuleInit {
  driver: WebDriver;

  constructor(private readonly configService: ConfigService) {}

  async onModuleInit() {
    const proxyAddress = '192.99.144.208:10001';
    const option = new chrome.Options().addArguments(
      `--proxy-server=http://${proxyAddress}`,
    );

    this.driver = await new Builder()
      .forBrowser(Browser.CHROME)
      .setChromeOptions(option)
      .build();
  }

  async goToPage(url: string) {
    await this.driver.get(url);
  }

  async login() {
    console.log(this.configService.get('TAOBAO_EMAIL'));
    await this.driver.get(LOGIN_BASE_URL);

    await this.driver
      .findElement(By.name(LOGIN_EMAIL_NAME_SELECTOR))
      .sendKeys(this.configService.get('TAOBAO_EMAIL'));

    await this.driver
      .findElement(By.name(LOGIN_PASSWORD_NAME_SELECTOR))
      .sendKeys(this.configService.get('TAOBAO_PASSWORD'));

    await this.driver
      .findElement(By.className(LOGIN_QR_CODE_CLASS_SELECTOR))
      .click();

    await this.driver
      .wait(until.elementLocated(By.className(GO_TO_HOME_NAME_SELECTOR)))
      .click();
  }

  async findItem(url: string) {
    await this.goToPage(url);
  }

  async getTitle(): Promise<string> {
    return this.driver
      .findElement(By.className(TITLE_CLASS_SELECTOR))
      .getText();
  }

  async getOptions() {
    const options: TaobaoOption = {};

    const optionElements = await this.driver.findElements(
      By.className(OPTION_WRAP_CLASS_SELECTOR),
    );

    for await (const optionElement of optionElements) {
      const name = await optionElement
        .findElement(By.className(OPTION_NAME_CLASS_SELECTOR))
        .getText();

      const valueWrapElements = await optionElement.findElements(
        By.className(OPTION_VALUE_WRAP_CALSS_SELECTOR),
      );

      const values = await Promise.all(
        valueWrapElements.map(
          async (valueWrapElement) =>
            await valueWrapElement
              .findElement(By.className(OPTION_VALUE_CLASS_SELECTOR))
              .getText(),
        ),
      );

      options[name] = values;
    }

    return options;
  }

  async getMainImages() {
    const imageUrls = [];

    const mainImageElements = await this.driver.findElements(
      By.className(MAIN_IMAGE_CLASS_SELECTOR),
    );

    await Promise.all(
      mainImageElements.map(async (mainImageElement) => {
        const url = await mainImageElement.getAttribute('src');
        imageUrls.push(url);
      }),
    );

    return imageUrls;
  }

  async getContentHtml() {
    await this.driver.wait(
      until.elementLocated(By.className(CONTENT_CLASS_SELECTOR)),
      1000,
    );

    const itemDetailEl = await this.driver.findElement(
      By.className(CONTENT_CLASS_SELECTOR),
    );
    const innerHTML = await itemDetailEl.getAttribute('innerHTML');

    return innerHTML;
  }

  // async downloadImage(url, image_path) {
  //   axios({
  //     url,
  //     responseType: 'stream',
  //   }).then(
  //     (response) =>
  //       new Promise((resolve, reject) => {
  //         response.data
  //           .pipe(fs.createWriteStream(image_path))
  //           .on('finish', () => resolve(''))
  //           .on('error', (e) => reject(e));
  //       }),
  //   );
  // }

  async close() {
    this.driver.close();
  }
}
