type ReadonlyRecord<K extends string, V> = Readonly<Record<K, V>>;

export type STATUS_VALUE =
  | 'WAIT'
  | 'SALE'
  | 'OUTOFSTOCK'
  | 'UNADMISSION'
  | 'REJECTION'
  | 'SUSPENSION'
  | 'CLOSE'
  | 'PROHIBITION'
  | 'DELETE';
export const STATUS_TYPE: ReadonlyRecord<STATUS_VALUE, STATUS_VALUE> = {
  WAIT: 'WAIT',
  SALE: 'SALE',
  OUTOFSTOCK: 'OUTOFSTOCK',
  UNADMISSION: 'UNADMISSION',
  REJECTION: 'REJECTION',
  SUSPENSION: 'SUSPENSION',
  CLOSE: 'CLOSE',
  PROHIBITION: 'PROHIBITION',
  DELETE: 'DELETE',
};

export type SALE_VALUE = 'NEW' | 'OLD';
export const SALE_TYPE: ReadonlyRecord<SALE_VALUE, SALE_VALUE> = {
  NEW: 'NEW',
  OLD: 'OLD',
};

export type DELIVERY_VALUE =
  | 'DELIVERY' // 택배, 소포, 등기
  | 'DIRECT'; // 직접 화물 배
export const DELIVERY_TYPE: ReadonlyRecord<DELIVERY_VALUE, DELIVERY_VALUE> = {
  DELIVERY: 'DELIVERY', // 택배, 소포, 등기
  DIRECT: 'DIRECT', // 직접 화물 배달
};

export type DELIVERY_ATTRIBUTE_VALUE =
  | 'NORMAL'
  | 'TODAY'
  | 'OPTION_TODAY'
  | 'HOPE'
  | 'TODAY_ARRIVAL'
  | 'DAWN_ARRIVAL'
  | 'ARRIVAL_GUARANTEE'
  | 'SELLER_GUARANTEE';

export const DELIVERY_ATTRIBUTE_TYPE: ReadonlyRecord<
  DELIVERY_ATTRIBUTE_VALUE,
  DELIVERY_ATTRIBUTE_VALUE
> = {
  NORMAL: 'NORMAL',
  TODAY: 'TODAY',
  OPTION_TODAY: 'OPTION_TODAY',
  HOPE: 'HOPE',
  TODAY_ARRIVAL: 'TODAY_ARRIVAL',
  DAWN_ARRIVAL: 'DAWN_ARRIVAL',
  ARRIVAL_GUARANTEE: 'ARRIVAL_GUARANTEE',
  SELLER_GUARANTEE: 'SELLER_GUARANTEE',
};

export type QUICK_SERVICE_AREAS_VALUE =
  | 'SEOUL'
  | 'GYEONGGI'
  | 'GOYANG'
  | 'GOCHON'
  | 'GONJIAM'
  | 'GWACHEON'
  | 'GWANGMYEONG'
  | 'GYEONGGIGWANGJU'
  | 'GYOMUN'
  | 'GURI'
  | 'GUSEONG'
  | 'GUNPO'
  | 'GIMPO'
  | 'BUCHEON'
  | 'BUNDANG'
  | 'SEONGNAM'
  | 'SUWON'
  | 'SUJI'
  | 'SIHEUNG'
  | 'ANSAN'
  | 'ANYANG'
  | 'YONGIN'
  | 'UIWANG'
  | 'UIJEONGBU'
  | 'ICHEON'
  | 'ILSAN'
  | 'JICHUK'
  | 'PAJU'
  | 'HANAM'
  | 'GWANGJU'
  | 'DAEGU'
  | 'DAEJEON'
  | 'BUSAN'
  | 'ULSAN'
  | 'INCHEON';

export const QUICK_SERVICE_AREAS_TYPE: ReadonlyRecord<
  QUICK_SERVICE_AREAS_VALUE,
  QUICK_SERVICE_AREAS_VALUE
> = {
  SEOUL: 'SEOUL',
  GYEONGGI: 'GYEONGGI',
  GOYANG: 'GOYANG',
  GOCHON: 'GOCHON',
  GONJIAM: 'GONJIAM',
  GWACHEON: 'GWACHEON',
  GWANGMYEONG: 'GWANGMYEONG',
  GYEONGGIGWANGJU: 'GYEONGGIGWANGJU',
  GYOMUN: 'GYOMUN',
  GURI: 'GURI',
  GUSEONG: 'GUSEONG',
  GUNPO: 'GUNPO',
  GIMPO: 'GIMPO',
  BUCHEON: 'BUCHEON',
  BUNDANG: 'BUNDANG',
  SEONGNAM: 'SEONGNAM',
  SUWON: 'SUWON',
  SUJI: 'SUJI',
  SIHEUNG: 'SIHEUNG',
  ANSAN: 'ANSAN',
  ANYANG: 'ANYANG',
  YONGIN: 'YONGIN',
  UIWANG: 'UIWANG',
  UIJEONGBU: 'UIJEONGBU',
  ICHEON: 'ICHEON',
  ILSAN: 'ILSAN',
  JICHUK: 'JICHUK',
  PAJU: 'PAJU',
  HANAM: 'HANAM',
  GWANGJU: 'GWANGJU',
  DAEGU: 'DAEGU',
  DAEJEON: 'DAEJEON',
  BUSAN: 'BUSAN',
  ULSAN: 'ULSAN',
  INCHEON: 'INCHEON',
};

export type DELIVERY_FEE_VALUE =
  | 'FREE'
  | 'CONDITIONAL_FREE'
  | 'PAID'
  | 'UNIT_QUANTITY_PAID'
  | 'RANGE_QUANTITY_PAID';

export const DELIVERY_FEE_TYPE: ReadonlyRecord<
  DELIVERY_FEE_VALUE,
  DELIVERY_FEE_VALUE
> = {
  FREE: 'FREE',
  CONDITIONAL_FREE: 'CONDITIONAL_FREE',
  PAID: 'PAID',
  UNIT_QUANTITY_PAID: 'UNIT_QUANTITY_PAID',
  RANGE_QUANTITY_PAID: 'RANGE_QUANTITY_PAID',
};

export type DELIVERY_FEE_PAY_VALUE =
  | 'COLLECT'
  | 'PREPAID'
  | 'COLLECT_OR_PREPAID';

export const DELIVERY_FEE_PAY_TYPE: ReadonlyRecord<
  DELIVERY_FEE_PAY_VALUE,
  DELIVERY_FEE_PAY_VALUE
> = {
  COLLECT: 'COLLECT',
  PREPAID: 'PREPAID',
  COLLECT_OR_PREPAID: 'COLLECT_OR_PREPAID',
};
export type DELIVERY_AREA_VALUE = 'AREA_2' | 'AREA_3';

export const DELIVERY_AREA_TYPE: ReadonlyRecord<
  DELIVERY_AREA_VALUE,
  DELIVERY_AREA_VALUE
> = {
  AREA_2: 'AREA_2',
  AREA_3: 'AREA_3',
};
export type RETURN_DELIVERY_COMPANY_PRIORITY_VALUE =
  | 'PRIMARY'
  | 'SECONDARY_1'
  | 'SECONDARY_2'
  | 'SECONDARY_3'
  | 'SECONDARY_4'
  | 'SECONDARY_5'
  | 'SECONDARY_6'
  | 'SECONDARY_7'
  | 'SECONDARY_8'
  | 'SECONDARY_9';

export const RETURN_DELIVERY_COMPANY_PRIORITY_TYPE: ReadonlyRecord<
  RETURN_DELIVERY_COMPANY_PRIORITY_VALUE,
  RETURN_DELIVERY_COMPANY_PRIORITY_VALUE
> = {
  PRIMARY: 'PRIMARY',
  SECONDARY_1: 'SECONDARY_1',
  SECONDARY_2: 'SECONDARY_2',
  SECONDARY_3: 'SECONDARY_3',
  SECONDARY_4: 'SECONDARY_4',
  SECONDARY_5: 'SECONDARY_5',
  SECONDARY_6: 'SECONDARY_6',
  SECONDARY_7: 'SECONDARY_7',
  SECONDARY_8: 'SECONDARY_8',
  SECONDARY_9: 'SECONDARY_9',
};
export type EXPECTED_DELIVERY_PERIOD_VALUE =
  | 'ETC'
  | 'TWO'
  | 'THREE'
  | 'FOUR'
  | 'FIVE'
  | 'SIX'
  | 'SEVEN'
  | 'EIGHT'
  | 'NINE'
  | 'TEN'
  | 'ELEVEN'
  | 'TWELVE'
  | 'THIRTEEN'
  | 'FOURTEEN';

export const EXPECTED_DELIVERY_PERIOD_TYPE: ReadonlyRecord<
  EXPECTED_DELIVERY_PERIOD_VALUE,
  EXPECTED_DELIVERY_PERIOD_VALUE
> = {
  ETC: 'ETC',
  TWO: 'TWO',
  THREE: 'THREE',
  FOUR: 'FOUR',
  FIVE: 'FIVE',
  SIX: 'SIX',
  SEVEN: 'SEVEN',
  EIGHT: 'EIGHT',
  NINE: 'NINE',
  TEN: 'TEN',
  ELEVEN: 'ELEVEN',
  TWELVE: 'TWELVE',
  THIRTEEN: 'THIRTEEN',
  FOURTEEN: 'FOURTEEN',
};

export interface INaverToken {
  access_token: string;
  expires_in: number;
  token_type: string;
}
