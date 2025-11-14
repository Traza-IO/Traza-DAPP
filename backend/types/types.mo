import Time "mo:base/Time";

module {
  public type Timestamp = Time.Time;

  public type ModelDescription = {
    name : Text;
    collection : Text;
    summary : Text;
  };

  public type Materials = {
    composition : Text;
    recycling : Text;
    percentageRecycling : Text;
    recyclingIncome : Text;
  };

  public type Packing = {
    descriptionType : Text;
    weight : Text;
    volume : Text;
    recycling : Text;
    percentageRecycling : Text;
  };

  public type Care = {
    care : [Text];
    description : Text;
  };

  public type Tip = {
    description : Text;
    list : [Text];
  };

  public type ModelDpp = {
    idModel : Text;
    idModelExport : Text;
    summaryMaterials : Text;
    nameModel : Text;
    brandInformation : Text;
    descriptionHeader : Text;
    descriptionModel : ModelDescription;
    materials : Materials;
    packing : Packing;
    care : Care;
    tips : [Tip];
    state : Text;
    userCreated : Text;
    creationDate : Timestamp;
    updateDate : Timestamp;
  };

  public type ModelDppAux = {
    idModel : Text;
    idModelExport : Text;
    summaryMaterials : Text;
    nameModel : Text;
    brandInformation : Text;
    descriptionModel : Text;
    materials : Text;
    packing : Text;
    care : Text;
    tips : Text;
    state : Text;
    userCreated : Text;
    creationDate : Timestamp;
    updateDate : Timestamp;
  };

  public type TraceSupplier = {
    title : Text;
    ruc : Text;
    location : Text;
    coords : Text;
  };

  public type TraceabilityTimeline = {
    process : Text;
    startTime : Text;
    endTime : Text;
    owner : Text;
  };

  public type TraceabilityLot = {
    location : Text;
    timeline : [TraceabilityTimeline];
  };

  public type Certification = {
    name : Text;
    organization : Text;
    number : Text;
    auditDate : Text;
    effectiveDate : Text;
    link : Text;
    logo : Text;
  };

  public type ComplianceSupplier = {
    supplier : Text;
    certifications : [Certification];
  };

  public type ComplianceProcess = {
    process : Text;
    certifications : [Certification];
  };

  public type BlockchainTimelineEntry = {
    process : Text;
    hash : Text;
  };

  public type BlockchainTraceabilityLot = {
    timeline : [BlockchainTimelineEntry];
  };

  public type LotDpp = {
    idLot : Text;
    idModel : Text;
    lotNumber : Text;
    description : Text;
    traceSuppliers : [TraceSupplier];
    traceability : TraceabilityLot;
    complianceSuppliers : [ComplianceSupplier];
    complianceProcess : ComplianceProcess;
    blockchainTraceability : BlockchainTraceabilityLot;
    state : Text;
    userCreated : Text;
    creationDate : Timestamp;
    updateDate : Timestamp;
  };

  public type ProductPhotos = {
    front : Text;
    left : Text;
    back : Text;
    right : Text;
  };

  public type ProductInfo = {
    name : Text;
    brand : Text;
    gtin : Text;
    productCode : Text;
    productCodeEU : Text;
    category : Text;
    size : Text;
    color : Text;
    year : Text;
    season : Text;
  };

  public type ProductTimeline = {
    process : Text;
    startTime : Text;
    endTime : Text;
    owner : Text;
  };

  public type ProductTraceability = {
    timeline : [ProductTimeline];
  };

  public type BlockchainProductTimelineEntry = {
    process : Text;
    hash : Text;
  };

  public type BlockchainProductTraceability = {
    timeline : [BlockchainProductTimelineEntry];
  };

  public type ProductDpp = {
    idProduct : Text;
    idLot : Text;
    gtinProduct : Text;
    idProductParentCompany : Text;
    idProductSystemEU : Text;
    photo : ProductPhotos;
    information : ProductInfo;
    traceability : ProductTraceability;
    blockchainTraceability : BlockchainProductTraceability;
    state : Text;
    userCreated : Text;
    creationDate : Timestamp;
    updateDate : Timestamp;
  };

  public type traceability_consolidate = {
    id_model : Text;
    id_model_export : Text;
    summary_materials : Text;
    name_model : Text;
    brand_information : {
      logo_mestiza : Text;
      facebook : Text;
      instagram : Text;
      whatsapp : Text;
      ecommerce : Text;
    };
    description_header : Text;
    description_model : {
      name : Text;
      collection : Text;
      summary : Text;
    };
    materials : {
      composition : Text;
      recycling : Text;
      percentage_recycling : Text;
      recycling_income : Text;
    };
    packing : {
      pack_type : Text;
      weight : Text;
      volume : Text;
      recycling : Text;
      percentage_recycling : Text;
    };
    care : {
      care : [Text];
      description : Text;
    };
    id_lot : Text;
    lot_number_product : Text;
    trace_supplier : [
      {
        title : Text;
        ruc : Text;
        location : Text;
        coords : Text;
      }
    ];
    traceability_batch : {
      location : Text;
      time_line : [{
        process : Text;
        start_time : Text;
        end_time : Text;
        owner : Text;
      }];
    };
    compliance_supplier : [{
      supplier : Text;
      certifications : [
        {
          name : Text;
          organization : Text;
          number : Text;
          audit_date : Text;
          effective_date : Text;
          link : Text;
          logo : Text;
        }
      ];
    }];
    compliance_process : {
      process : Text;
      certifications : [
        {
          name : Text;
          organization : Text;
          number : Text;
          audit_date : Text;
          effective_date : Text;
          link : Text;
          logo : Text;
        }
      ];
    };
    traceability_blockchain_lot : {
      time_line : [{
        process : Text;
        label_start : Text;
        hash_start : Text;
        label_end : Text;
        hash_end : Text;
      }];
    };
    color_brand: Text;
    gtin_product : Text;
    id_product_parent_company : Text;
    id_product_system_eu : Text;
    photo_product : {
      frontal : Text;
      left : Text;
      later : Text;
      right : Text;
    };
    information_product : {
      name : Text;
      brand : Text;
      gtin : Text;
      product_code : Text;
      product_code_eu : Text;
      category : Text;
      size : Text;
      color : Text;
      year : Text;
      season : Text;
    };
    traceability_product : {
      time_line : [
        {
          process : Text;
          start_time : Text;
          end_time : Text;
          owner : Text;
        }
      ];
      full_name : Text;
      company_name : Text;
      ruc : Text;
    };
    traceability_blockchain_product : {
      time_line : [
        {
          process : Text;
          label_start : Text;
          hash_start : Text;
          label_end : Text;
          hash_end : Text;
        }
      ];
    };
  };

  public type traceability_consolidate_public = {
    id_model : Text;
    id_model_export : Text;
    summary_materials : Text;
    name_model : Text;
    brand_information : {
      logo_mestiza : Text;
      facebook : Text;
      instagram : Text;
      whatsapp : Text;
      ecommerce : Text;
    };
    color_brand: Text;
    description_header : Text;
    description_model : {
      name : Text;
      collection : Text;
      summary : Text;
    };
    materials : {
      composition : Text;
      recycling : Text;
      percentage_recycling : Text;
      recycling_income : Text;
    };
    packing : {
      pack_type : Text;
      weight : Text;
      volume : Text;
      recycling : Text;
      percentage_recycling : Text;
    };
    care : {
      care : [Text];
      description : Text;
    };
    id_lot : Text;
    lot_number_product : Text;
    trace_supplier : [
      {
        title : Text;
        ruc : Text;
        location : Text;
        coords : Text;
      }
    ];
    traceability_batch : {
      location : Text;
      time_line : [{
        process : Text;
        start_time : Text;
        end_time : Text;
        owner : Text;
      }];
    };
    compliance_supplier : [{
      supplier : Text;
      certifications : [
        {
          name : Text;
          organization : Text;
          number : Text;
          audit_date : Text;
          effective_date : Text;
          link : Text;
          logo : Text;
        }
      ];
    }];
    compliance_process : {
      process : Text;
      certifications : [
        {
          name : Text;
          organization : Text;
          number : Text;
          audit_date : Text;
          effective_date : Text;
          link : Text;
          logo : Text;
        }
      ];
    };
    traceability_blockchain_lot : {
      time_line : [{
        process : Text;
        label_start : Text;
        hash_start : Text;
        label_end : Text;
        hash_end : Text;
      }];
    };
    gtin_product : Text;
    id_product_parent_company : Text;
    id_product_system_eu : Text;
    photo_product : {
      frontal : ?Blob;
      left : ?Blob;
      later : ?Blob;
      right : ?Blob;
    };
    information_product : {
      name : Text;
      brand : Text;
      gtin : Text;
      product_code : Text;
      product_code_eu : Text;
      category : Text;
      size : Text;
      color : Text;
      year : Text;
      season : Text;
    };
    traceability_product : {
      time_line : [
        {
          process : Text;
          start_time : Text;
          end_time : Text;
          owner : Text;
        }
      ];
      full_name : Text;
      company_name : Text;
      ruc : Text;
    };
    traceability_blockchain_product : {
      time_line : [
        {
          process : Text;
          label_start : Text;
          hash_start : Text;
          label_end : Text;
          hash_end : Text;
        }
      ];
    };
  };

  public type TraceabilityUnit = {
  gtin: Text;
  description: Text;
  };
};

