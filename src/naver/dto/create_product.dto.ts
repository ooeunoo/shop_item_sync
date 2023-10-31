import { IsEnum, IsObject } from 'class-validator';
import {
  DELIVERY_AREA_VALUE,
  DELIVERY_ATTRIBUTE_VALUE,
  DELIVERY_FEE_PAY_VALUE,
  DELIVERY_FEE_VALUE,
  DELIVERY_VALUE,
  EXPECTED_DELIVERY_PERIOD_VALUE,
  QUICK_SERVICE_AREAS_VALUE,
  RETURN_DELIVERY_COMPANY_PRIORITY_VALUE,
  SALE_TYPE,
  SALE_VALUE,
  STATUS_TYPE,
  STATUS_VALUE,
} from '../naver.interface';

export class CreateProductDto {
  @IsObject()
  originProduct: OriginalProductDto;
  smartstoreChannelProduct: SmartStoreChannelProductDto;
  windowChannelProduct: WindowChannelProductDto;
}

export class OriginalProductDto {
  @IsEnum(STATUS_TYPE)
  statusType: STATUS_VALUE;
  @IsEnum(SALE_TYPE)
  saleType?: SALE_VALUE; // default: NEW
  leafCategoryId: string; // 상품 등록시 필수
  name: string; // 상품 명
  detailContent: string; // 상품 상세 정보
  images: {
    representativeImage: { url: string }; // 상품 대표 이미지
    optionalImages?: [{ url: string }]; // 추가 이미지
  };
  saleStartDate?: string; // 'yyyy-MM-dd'T'HH:mm[:ss][.SSS]XXX'
  saleEndDate?: string; // 'yyyy-MM-dd'T'HH:mm[:ss][.SSS]XXX'
  salePrice: number; // 상품 판매 가격
  stockQuantity: number; // 상품 재고, default: 0
  deliveryInfo?: {
    deliveryType: DELIVERY_VALUE;
    deliveryAttributeType: DELIVERY_ATTRIBUTE_VALUE;
    deliveryCompany: string;
    deliveryBundleGroupUsable: true;
    deliveryBundleGroupId: number;
    quickServiceAreas: QUICK_SERVICE_AREAS_VALUE[];
    visitAddressId: number;
    deliveryFee: {
      deliveryFeeType: DELIVERY_FEE_VALUE;
      baseFee: number;
      freeConditionalAmount: number;
      repeatQuantity: number;
      secondBaseQuantity: number;
      secondExtraFee: number;
      thirdBaseQuantity: number;
      thirdExtraFee: number;
      deliveryFeePayType: DELIVERY_FEE_PAY_VALUE;
      deliveryFeeByArea: {
        deliveryAreaType: DELIVERY_AREA_VALUE;
        area2extraFee: number;
        area3extraFee: number;
      };
      differentialFeeByArea: string;
    };
    claimDeliveryInfo: {
      returnDeliveryCompanyPriorityType: RETURN_DELIVERY_COMPANY_PRIORITY_VALUE;
      returnDeliveryFee: number;
      exchangeDeliveryFee: number;
      shippingAddressId: number;
      returnAddressId: number;
      freeReturnInsuranceYn: true;
    };
    installationFee: true;
    expectedDeliveryPeriodType: EXPECTED_DELIVERY_PERIOD_VALUE;
    expectedDeliveryPeriodDirectInput: string;
    todayStockQuantity: number;
    customProductAfterOrderYn: true;
    hopeDeliveryGroupId: number;
  };
  productLogistics: [{ logisticsCompanyId: string; logisticsCenterId: string }];
  detailAttribute: {
    naverShoppingSearchInfo: {
      modelId: number;
      manufacturerName: string;
      brandName: string;
      modelName: string;
    };
    afterServiceInfo: {
      afterServiceTelephoneNumber: string;
      afterServiceGuideContent: string;
    };
    purchaseQuantityInfo: {
      minPurchaseQuantity: number;
      maxPurchaseQuantityPerId: number;
      maxPurchaseQuantityPerOrder: number;
    };
    originAreaInfo: {
      originAreaCode: string;
      importer: string;
      content: string;
      plural: true;
    };
    sellerCodeInfo: {
      sellerManagementCode: string;
      sellerBarcode: string;
      sellerCustomCode1: string;
      sellerCustomCode2: string;
    };
    optionInfo: {
      simpleOptionSortType: 'CREATE';
      optionSimple: [
        { id: number; groupName: string; name: string; usable: true },
      ];
      optionCustom: [
        { id: number; groupName: string; name: string; usable: true },
      ];
      optionCombinationSortType: 'CREATE';
      optionCombinationGroupNames: {
        optionGroupName1: string;
        optionGroupName2: string;
        optionGroupName3: string;
        optionGroupName4: string;
      };
      optionCombinations: [
        {
          id: number;
          optionName1: string;
          optionName2: string;
          optionName3: string;
          optionName4: string;
          stockQuantity: number;
          price: number;
          sellerManagerCode: string;
          usable: true;
        },
      ];
      standardOptionGroups: [
        {
          groupName: string;
          standardOptionAttributes: [
            {
              attributeId: number;
              attributeValueId: number;
              attributeValueName: string;
              imageUrls: [string];
            },
          ];
        },
      ];
      optionStandards: [
        {
          id: number;
          optionName1: string;
          optionName2: string;
          stockQuantity: number;
          sellerManagerCode: string;
          usable: true;
        },
      ];
      useStockManagement: true;
      optionDeliveryAttributes: [string];
    };
    supplementProductInfo: {
      sortType: 'CREATE';
      supplementProducts: [
        {
          id: number;
          groupName: string;
          name: string;
          price: number;
          stockQuantity: number;
          sellerManagementCode: string;
          usable: true;
        },
      ];
    };
    purchaseReviewInfo: {
      purchaseReviewExposure: true;
      reviewUnExposeReason: string;
    };
    isbnInfo: {
      isbn13: string;
      issn: string;
      independentPublicationYn: true;
    };
    bookInfo: {
      publishDay: string;
      publisher: { code: string; text: string };
      authors: [{ code: string; text: string }];
      illustrators: [{ code: string; text: string }];
      translators: [{ code: string; text: string }];
    };
    eventPhraseCont: string;
    manufactureDate: '2number23-1number-31';
    releaseDate: '2number23-1number-31';
    validDate: '2number23-1number-31';
    taxType: 'TAX';
    productCertificationInfos: [
      {
        certificationInfoId: number;
        certificationKindType: 'KC_CERTIFICATION';
        name: string;
        certificationNumber: string;
        certificationMark: true;
        companyName: string;
        certificationDate: '2number23-1number-31';
      },
    ];
    certificationTargetExcludeContent: {
      childCertifiedProductExclusionYn: true;
      kcExemptionType: 'OVERSEAS';
      kcCertifiedProductExclusionYn: 'FALSE';
      greenCertifiedProductExclusionYn: true;
    };
    sellerCommentContent: string;
    sellerCommentUsable: true;
    minorPurchasable: true;
    ecoupon: {
      periodType: 'FIXED';
      validStartDate: '2number23-1number-31';
      validEndDate: '2number23-1number-31';
      periodDays: number;
      publicInformationContents: string;
      contactInformationContents: string;
      usePlaceType: 'PLACE';
      usePlaceContents: string;
      restrictCart: true;
      siteName: string;
    };
    productInfoProvidedNotice: {
      productInfoProvidedNoticeType: 'WEAR';
      wear: {
        returnCostReason: string;
        noRefundReason: string;
        qualityAssuranceStandard: string;
        compensationProcedure: string;
        troubleShootingContents: string;
        material: string;
        color: string;
        size: string;
        manufacturer: string;
        caution: string;
        packDate: string;
        packDateText: string;
        warrantyPolicy: string;
        afterServiceDirector: string;
      };
      shoes: {
        returnCostReason: string;
        noRefundReason: string;
        qualityAssuranceStandard: string;
        compensationProcedure: string;
        troubleShootingContents: string;
        material: string;
        color: string;
        size: string;
        height: string;
        manufacturer: string;
        caution: string;
        warrantyPolicy: string;
        afterServiceDirector: string;
      };
      bag: {
        returnCostReason: string;
        noRefundReason: string;
        qualityAssuranceStandard: string;
        compensationProcedure: string;
        troubleShootingContents: string;
        type: string;
        material: string;
        color: string;
        size: string;
        manufacturer: string;
        caution: string;
        warrantyPolicy: string;
        afterServiceDirector: string;
      };
      fashionItems: {
        returnCostReason: string;
        noRefundReason: string;
        qualityAssuranceStandard: string;
        compensationProcedure: string;
        troubleShootingContents: string;
        type: string;
        material: string;
        size: string;
        manufacturer: string;
        caution: string;
        warrantyPolicy: string;
        afterServiceDirector: string;
      };
      sleepingGear: {
        returnCostReason: string;
        noRefundReason: string;
        qualityAssuranceStandard: string;
        compensationProcedure: string;
        troubleShootingContents: string;
        material: string;
        color: string;
        size: string;
        components: string;
        manufacturer: string;
        caution: string;
        warrantyPolicy: string;
        afterServiceDirector: string;
      };
      furniture: {
        returnCostReason: string;
        noRefundReason: string;
        qualityAssuranceStandard: string;
        compensationProcedure: string;
        troubleShootingContents: string;
        itemName: string;
        certificationType: string;
        color: string;
        components: string;
        material: string;
        manufacturer: string;
        importer: string;
        producer: string;
        size: string;
        installedCharge: string;
        warrantyPolicy: string;
        refurb: string;
        afterServiceDirector: string;
      };
      imageAppliances: {
        returnCostReason: string;
        noRefundReason: string;
        qualityAssuranceStandard: string;
        compensationProcedure: string;
        troubleShootingContents: string;
        itemName: string;
        modelName: string;
        certificationType: string;
        ratedVoltage: string;
        powerConsumption: string;
        energyEfficiencyRating: string;
        releaseDate: string;
        releaseDateText: string;
        manufacturer: string;
        size: string;
        additionalCost: string;
        displaySpecification: string;
        warrantyPolicy: string;
        afterServiceDirector: string;
      };
      homeAppliances: {
        returnCostReason: string;
        noRefundReason: string;
        qualityAssuranceStandard: string;
        compensationProcedure: string;
        troubleShootingContents: string;
        itemName: string;
        modelName: string;
        certificationType: string;
        ratedVoltage: string;
        powerConsumption: string;
        energyEfficiencyRating: string;
        releaseDate: string;
        releaseDateText: string;
        manufacturer: string;
        size: string;
        additionalCost: string;
        warrantyPolicy: string;
        afterServiceDirector: string;
      };
      seasonAppliances: {
        returnCostReason: string;
        noRefundReason: string;
        qualityAssuranceStandard: string;
        compensationProcedure: string;
        troubleShootingContents: string;
        itemName: string;
        modelName: string;
        certificationType: string;
        ratedVoltage: string;
        powerConsumption: string;
        energyEfficiencyRating: string;
        releaseDate: string;
        releaseDateText: string;
        manufacturer: string;
        size: string;
        area: string;
        installedCharge: string;
        warrantyPolicy: string;
        afterServiceDirector: string;
      };
      officeAppliances: {
        returnCostReason: string;
        noRefundReason: string;
        qualityAssuranceStandard: string;
        compensationProcedure: string;
        troubleShootingContents: string;
        itemName: string;
        modelName: string;
        certificationType: string;
        ratedVoltage: string;
        powerConsumption: string;
        energyEfficiencyRating: string;
        releaseDate: string;
        releaseDateText: string;
        manufacturer: string;
        size: string;
        weight: string;
        specification: string;
        warrantyPolicy: string;
        afterServiceDirector: string;
      };
      opticsAppliances: {
        returnCostReason: string;
        noRefundReason: string;
        qualityAssuranceStandard: string;
        compensationProcedure: string;
        troubleShootingContents: string;
        itemName: string;
        modelName: string;
        certificationType: string;
        releaseDate: string;
        releaseDateText: string;
        manufacturer: string;
        size: string;
        weight: string;
        specification: string;
        warrantyPolicy: string;
        afterServiceDirector: string;
      };
      microElectronics: {
        returnCostReason: string;
        noRefundReason: string;
        qualityAssuranceStandard: string;
        compensationProcedure: string;
        troubleShootingContents: string;
        itemName: string;
        modelName: string;
        certificationType: string;
        ratedVoltage: string;
        powerConsumption: string;
        releaseDate: string;
        releaseDateText: string;
        manufacturer: string;
        size: string;
        weight: string;
        specification: string;
        warrantyPolicy: string;
        afterServiceDirector: string;
      };
      navigation: {
        returnCostReason: string;
        noRefundReason: string;
        qualityAssuranceStandard: string;
        compensationProcedure: string;
        troubleShootingContents: string;
        itemName: string;
        modelName: string;
        certificationType: string;
        ratedVoltage: string;
        powerConsumption: string;
        releaseDate: string;
        releaseDateText: string;
        manufacturer: string;
        size: string;
        weight: string;
        specification: string;
        updateCost: string;
        freeCostPeriod: string;
        warrantyPolicy: string;
        afterServiceDirector: string;
      };
      carArticles: {
        returnCostReason: string;
        noRefundReason: string;
        qualityAssuranceStandard: string;
        compensationProcedure: string;
        troubleShootingContents: string;
        itemName: string;
        modelName: string;
        releaseDate: string;
        releaseDateText: string;
        certificationType: string;
        caution: string;
        manufacturer: string;
        size: string;
        applyModel: string;
        warrantyPolicy: string;
        roadWorthyCertification: string;
        afterServiceDirector: string;
      };
      medicalAppliances: {
        returnCostReason: string;
        noRefundReason: string;
        qualityAssuranceStandard: string;
        compensationProcedure: string;
        troubleShootingContents: string;
        itemName: string;
        modelName: string;
        licenceNo: string;
        advertisingCertificationType: string;
        ratedVoltage: string;
        powerConsumption: string;
        releaseDate: string;
        releaseDateText: string;
        manufacturer: string;
        purpose: string;
        usage: string;
        caution: string;
        warrantyPolicy: string;
        afterServiceDirector: string;
      };
      kitchenUtensils: {
        returnCostReason: string;
        noRefundReason: string;
        qualityAssuranceStandard: string;
        compensationProcedure: string;
        troubleShootingContents: string;
        itemName: string;
        modelName: string;
        material: string;
        component: string;
        size: string;
        releaseDate: string;
        releaseDateText: string;
        manufacturer: string;
        producer: string;
        importDeclaration: true;
        warrantyPolicy: string;
        afterServiceDirector: string;
      };
      cosmetic: {
        returnCostReason: string;
        noRefundReason: string;
        qualityAssuranceStandard: string;
        compensationProcedure: string;
        troubleShootingContents: string;
        capacity: string;
        specification: string;
        expirationDate: string;
        expirationDateText: string;
        usage: string;
        manufacturer: string;
        producer: string;
        distributor: string;
        customizedDistributor: string;
        mainIngredient: string;
        certificationType: string;
        caution: string;
        warrantyPolicy: string;
        customerServicePhoneNumber: string;
      };
      jewellery: {
        returnCostReason: string;
        noRefundReason: string;
        qualityAssuranceStandard: string;
        compensationProcedure: string;
        troubleShootingContents: string;
        material: string;
        purity: string;
        bandMaterial: string;
        weight: string;
        manufacturer: string;
        producer: string;
        size: string;
        caution: string;
        specification: string;
        provideWarranty: string;
        warrantyPolicy: string;
        afterServiceDirector: string;
      };
      food: {
        returnCostReason: string;
        noRefundReason: string;
        qualityAssuranceStandard: string;
        compensationProcedure: string;
        troubleShootingContents: string;
        foodItem: string;
        weight: string;
        amount: string;
        size: string;
        packDate: '2number23-1number-31';
        packDateText: string;
        expirationDate: '2number23-1number-31';
        expirationDateText: string;
        consumptionDate: '2number23-1number-31';
        consumptionDateText: string;
        producer: string;
        relevantLawContent: string;
        productComposition: string;
        keep: string;
        adCaution: string;
        customerServicePhoneNumber: string;
      };
      generalFood: {
        returnCostReason: string;
        noRefundReason: string;
        qualityAssuranceStandard: string;
        compensationProcedure: string;
        troubleShootingContents: string;
        productName: string;
        foodType: string;
        producer: string;
        location: string;
        packDate: '2number23-1number-31';
        packDateText: string;
        expirationDate: '2number23-1number-31';
        expirationDateText: string;
        consumptionDate: '2number23-1number-31';
        consumptionDateText: string;
        weight: string;
        amount: string;
        ingredients: string;
        nutritionFacts: string;
        geneticallyModified: true;
        consumerSafetyCaution: string;
        importDeclarationCheck: true;
        customerServicePhoneNumber: string;
      };
      dietFood: {
        returnCostReason: string;
        noRefundReason: string;
        qualityAssuranceStandard: string;
        compensationProcedure: string;
        troubleShootingContents: string;
        productName: string;
        producer: string;
        location: string;
        expirationDate: '2number23-1number-31';
        expirationDateText: string;
        consumptionDate: '2number23-1number-31';
        consumptionDateText: string;
        storageMethod: string;
        weight: string;
        amount: string;
        ingredients: string;
        nutritionFacts: string;
        specification: string;
        cautionAndSideEffect: string;
        nonMedicinalUsesMessage: string;
        geneticallyModified: true;
        importDeclarationCheck: true;
        consumerSafetyCaution: string;
        customerServicePhoneNumber: string;
      };
      kids: {
        returnCostReason: string;
        noRefundReason: string;
        qualityAssuranceStandard: string;
        compensationProcedure: string;
        troubleShootingContents: string;
        itemName: string;
        modelName: string;
        certificationType: string;
        size: string;
        weight: string;
        color: string;
        material: string;
        recommendedAge: string;
        releaseDate: string;
        releaseDateText: string;
        manufacturer: string;
        caution: string;
        warrantyPolicy: string;
        afterServiceDirector: string;
        numberLimit: string;
      };
      musicalInstrument: {
        returnCostReason: string;
        noRefundReason: string;
        qualityAssuranceStandard: string;
        compensationProcedure: string;
        troubleShootingContents: string;
        itemName: string;
        modelName: string;
        size: string;
        color: string;
        material: string;
        components: string;
        releaseDate: string;
        releaseDateText: string;
        manufacturer: string;
        detailContent: string;
        warrantyPolicy: string;
        afterServiceDirector: string;
      };
      sportsEquipment: {
        returnCostReason: string;
        noRefundReason: string;
        qualityAssuranceStandard: string;
        compensationProcedure: string;
        troubleShootingContents: string;
        itemName: string;
        modelName: string;
        certificationType: string;
        size: string;
        weight: string;
        color: string;
        material: string;
        components: string;
        releaseDate: string;
        releaseDateText: string;
        manufacturer: string;
        detailContent: string;
        warrantyPolicy: string;
        afterServiceDirector: string;
      };
      books: {
        returnCostReason: string;
        noRefundReason: string;
        qualityAssuranceStandard: string;
        compensationProcedure: string;
        troubleShootingContents: string;
        title: string;
        author: string;
        publisher: string;
        size: string;
        pages: string;
        components: string;
        publishDate: '2number23-1number-31';
        publishDateText: string;
        description: string;
      };
      rentalEtc: {
        returnCostReason: string;
        noRefundReason: string;
        qualityAssuranceStandard: string;
        compensationProcedure: string;
        troubleShootingContents: string;
        itemName: string;
        modelName: string;
        ownershipTransferCondition: string;
        payingForLossOrDamage: string;
        refundPolicyForCancel: string;
        customerServicePhoneNumber: string;
      };
      digitalContents: {
        returnCostReason: string;
        noRefundReason: string;
        qualityAssuranceStandard: string;
        compensationProcedure: string;
        troubleShootingContents: string;
        producer: string;
        termsOfUse: string;
        usePeriod: string;
        medium: string;
        requirement: string;
        cancelationPolicy: string;
        customerServicePhoneNumber: string;
      };
      giftCard: {
        returnCostReason: string;
        noRefundReason: string;
        qualityAssuranceStandard: string;
        compensationProcedure: string;
        troubleShootingContents: string;
        issuer: string;
        periodStartDate: '2number23-1number-31';
        periodEndDate: '2number23-1number-31';
        periodDays: number;
        termsOfUse: string;
        useStorePlace: string;
        useStoreAddressId: number;
        useStoreUrl: string;
        refundPolicy: string;
        customerServicePhoneNumber: string;
      };
      mobileCoupon: {
        returnCostReason: string;
        noRefundReason: string;
        qualityAssuranceStandard: string;
        compensationProcedure: string;
        troubleShootingContents: string;
        issuer: string;
        usableCondition: string;
        usableStore: string;
        cancelationPolicy: string;
        customerServicePhoneNumber: string;
      };
      movieShow: {
        returnCostReason: string;
        noRefundReason: string;
        qualityAssuranceStandard: string;
        compensationProcedure: string;
        troubleShootingContents: string;
        sponsor: string;
        actor: string;
        rating: string;
        showTime: string;
        showPlace: string;
        cancelationCondition: string;
        cancelationPolicy: string;
        customerServicePhoneNumber: string;
      };
      etcService: {
        returnCostReason: string;
        noRefundReason: string;
        qualityAssuranceStandard: string;
        compensationProcedure: string;
        troubleShootingContents: string;
        serviceProvider: string;
        certificateDetails: string;
        usableCondition: string;
        cancelationStandard: string;
        cancelationPolicy: string;
        customerServicePhoneNumber: string;
      };
      biochemistry: {
        returnCostReason: string;
        noRefundReason: string;
        qualityAssuranceStandard: string;
        compensationProcedure: string;
        troubleShootingContents: string;
        productName: string;
        dosageForm: string;
        packDate: string;
        packDateText: string;
        expirationDate: string;
        expirationDateText: string;
        weight: string;
        effect: string;
        importer: string;
        producer: string;
        manufacturer: string;
        childProtection: string;
        chemicals: string;
        caution: string;
        safeCriterionNo: string;
        customerServicePhoneNumber: string;
      };
      biocidal: {
        returnCostReason: string;
        noRefundReason: string;
        qualityAssuranceStandard: string;
        compensationProcedure: string;
        troubleShootingContents: string;
        productName: string;
        weight: string;
        effect: string;
        rangeOfUse: string;
        importer: string;
        producer: string;
        manufacturer: string;
        childProtection: string;
        harmfulChemicalSubstance: string;
        maleficence: string;
        caution: string;
        approvalNumber: string;
        customerServicePhoneNumber: string;
        expirationDate: '2number23-1number-31';
        expirationDateText: string;
      };
      cellPhone: {
        returnCostReason: string;
        noRefundReason: string;
        qualityAssuranceStandard: string;
        compensationProcedure: string;
        troubleShootingContents: string;
        itemName: string;
        modelName: string;
        certificationType: string;
        releaseDate: string;
        releaseDateText: string;
        manufacturer: string;
        importer: string;
        producer: string;
        size: string;
        weight: string;
        telecomType: string;
        joinProcess: string;
        extraBurden: string;
        specification: string;
        warrantyPolicy: string;
        afterServiceDirector: string;
      };
      etc: {
        returnCostReason: string;
        noRefundReason: string;
        qualityAssuranceStandard: string;
        compensationProcedure: string;
        troubleShootingContents: string;
        itemName: string;
        modelName: string;
        certificateDetails: string;
        manufacturer: string;
        afterServiceDirector: string;
        customerServicePhoneNumber: string;
      };
    };
    productAttributes: [
      {
        attributeSeq: number;
        attributeValueSeq: number;
        attributeRealValue: string;
        attributeRealValueUnitCode: string;
      },
    ];
    cultureCostIncomeDeductionYn: true;
    customProductYn: true;
    itselfProductionProductYn: true;
    brandCertificationYn: true;
    seoInfo: {
      pageTitle: string;
      metaDescription: string;
      sellerTags: [{ code: number; text: string }];
    };
  };
  customerBenefit: {
    immediateDiscountPolicy: {
      discountMethod: {
        value: number;
        unitType: 'PERCENT';
        startDate: '2number23-1number-31T16:19:54Z';
        endDate: '2number23-1number-31T16:19:54Z';
      };
      mobileDiscountMethod: {
        value: number;
        unitType: 'PERCENT';
        startDate: '2number23-1number-31T16:19:54Z';
        endDate: '2number23-1number-31T16:19:54Z';
      };
    };
    purchasePointPolicy: {
      value: number;
      unitType: 'PERCENT';
      startDate: '2number23-1number-31';
      endDate: '2number23-1number-31';
    };
    reviewPointPolicy: {
      textReviewPoint: number;
      photoVideoReviewPoint: number;
      afterUseTextReviewPoint: number;
      afterUsePhotoVideoReviewPoint: number;
      storeMemberReviewPoint: number;
      startDate: '2number23-1number-31';
      endDate: '2number23-1number-31';
    };
    freeInterestPolicy: {
      value: number;
      startDate: '2number23-1number-31';
      endDate: '2number23-1number-31';
    };
    giftPolicy: { presentContent: string };
    multiPurchaseDiscountPolicy: {
      discountMethod: {
        value: number;
        unitType: 'PERCENT';
        startDate: '2number23-1number-31';
        endDate: '2number23-1number-31';
      };
      orderValue: number;
      orderValueUnitType: 'PERCENT';
    };
  };
}

export class SmartStoreChannelProductDto {
  channelProductName: string;
  bbsSeq: number;
  storeKeepExclusiveProduct: true;
  naverShoppingRegistration: true;
  channelProductDisplayStatusType: 'WAIT';
}

export class WindowChannelProductDto {
  channelProductName: string;
  bbsSeq: number;
  storeKeepExclusiveProduct: true;
  naverShoppingRegistration: true;
  channelNo: number;
  best: true;
}
