module{
   public type ModelDescription_Type = {
    name : Text;
    collection : Text;
    summary : Text;
  };
  public type materials_Type = {
    composition : Text;
    recycling : Text;
    percentage_recycling : Text;
    recycling_income : Text;
  };

  public type packing_Type = {
    packingdescriptiontype : Text;
    weight : Text;
    volume : Text;
    recycling : Text;
    percentage_recycling : Text;
  };

  public type care_Type = {
    care : [Text];
    description : Text;
  };
  public type tips_Type = {
    description : Text;
    list : [Text];
  };

  public type ModelDPP_Type = {
    id_model : Text;
    id_model_export : Text;
    summary_materials : Text;
    name_model: Text;
    brand_information : Text;
    description_model : ModelDescription_Type;
    materials : materials_Type;
    packing : packing_Type;
    care : care_Type;
    tips : [tips_Type];
    state : Text;
    user_created : Text;
    creation_date : Text;
    update_date : Text;
  };
   public type ModelDPP_aux_Type = {
    id_model : Text;
    id_model_export : Text;
    summary_materials : Text;
    name_model: Text;
    brand_information : Text;
    description_model : Text;
    materials : Text;
    packing : Text;
    care : Text;
    tips : Text;
    state : Text;
    user_created : Text;
    creation_date : Text;
    update_date : Text;
  };
  public type trace_supplier_type={
    title: Text;
    ruc: Text;
    location: Text;
    coords: Text;
  };
  public type time_line_traceability_type={
    process: Text;
    start_time: Text;
    end_time: Text;
    owner: Text;
  };
  public type traceability_lot_type = {
    location: Text;
    time_line: [time_line_traceability_type];
  };

 
  public type certifications_compliance_type = {
    name: Text;
    organization: Text;
    number: Text;
    audit_date: Text;
    effective_date: Text;
    link: Text;
    logo: Text;
  };
  public type compliance_supplier_type = {
    supplier: Text;
    certifications : [certifications_compliance_type];
  };
  public type compliance_process_type = {
    process: Text;
    certifications: [certifications_compliance_type]
  };
  public type time_line_traceability_lot_type = {
    process: Text;
    hash: Text;

  };
  public type traceability_blockchain_lot_type = {
    time_line: [time_line_traceability_lot_type]
  };
  public type lotdpp_type={
    id_lot: Text;
    id_model: Text;
    lot_number_product: Text;
    description_lot: Text;
    trace_supplier: [trace_supplier_type];
    traceability_lot: traceability_lot_type;
    compliance_supplier: [compliance_supplier_type];
    compliance_process: compliance_process_type;
    traceability_blockchain_lot: traceability_blockchain_lot_type;
    state: Text;
    user_created: Text;
    creation_date: Text;
    update_date: Text;
  };
  public type photo_product_type = {
    frontal: Text;
    left: Text;
    later: Text;
    right: Text;
  };
  public type information_product_type = {
    name: Text;
    brand: Text;
    GTIN: Text;
    productcode: Text;
    productcode_EU: Text;
    category: Text;
    size: Text;
    color: Text;
    year: Text;
    season: Text;
  };
  public type time_line_product_type = {
    process: Text;
    start_time: Text;
    end_time: Text;
    owner: Text;
  };
  public type traceability_product_dpp_type = {
      time_line: [time_line_product_type];
  };

  public type traceability_blockchain_product_dpp_time_line_type = {
    process: Text;
    hash: Text;
  };
  public type traceability_blockchain_product_dpp_type = {
    time_line: [traceability_blockchain_product_dpp_time_line_type]
  };

  public type product_dpp_type = {
    id_product : Text;
    id_lot : Text;
    gtin_product : Text;
    id_product_parent_company : Text;
    id_product_system_eu : Text;
    photo_product : photo_product_type;
    information_product : information_product_type;
    traceability_product : traceability_product_dpp_type;
    traceability_blockchain_product : traceability_blockchain_product_dpp_type;
    state : Text;
    user_created : Text;
    creation_date : Text;
    update_date : Text;
  };



    public type traceability_consolidate = {
    id_model: Text;
    id_model_export: Text;
    summary_materials: Text;
    name_model:Text;
    brand_information: {
      logo_mestiza: Text;
      facebook: Text;
      instagram: Text;
      whatsapp: Text;
      ecommerce: Text;
    };
    description_header: Text;
    description_model: {
      name: Text;
      collection: Text;
      summary: Text;
    };
    materials:{
      composition: Text;
      recycling: Text;
      percentage_recycling: Text;
      recycling_income: Text;
    };
    packing:{
      pack_type: Text;
      weight: Text;
      volume: Text;
      recycling: Text;
      percentage_recycling: Text;
    };
    care:{
      care:[Text];
      description: Text;
    };
    id_lot: Text;
    lot_number_product: Text;
    trace_supplier:[
      {
        title: Text;
        ruc: Text;
        location: Text;
        coords: Text;
      }
    ];
    traceability_batch:{
      location: Text;
      time_line:[{
        process: Text;
        start_time: Text;
        end_time: Text;
        owner: Text;
      }]
    };
    compliance_supplier:[
      {
      supplier: Text;
      certifications:[
        {
          name: Text;
          organization: Text;
          number: Text;
          audit_date: Text;
          effective_date: Text;
          link: Text;
          logo: Text;
        }
      ]
    }];
    compliance_process:
      {
        process: Text;
        certifications:[{
          name: Text;
          organization: Text;
          number: Text;
          audit_date: Text;
          effective_date: Text;
          link: Text;
          logo: Text;
          }
        ]
      };
    traceability_blockchain_lot: {
      time_line:[{
        process: Text;
        label_start: Text;
        hash_start:  Text;
        label_end: Text;
        hash_end: Text;
      }]
    };
    gtin_product: Text;
    id_product_parent_company: Text;
    id_product_system_eu : Text;
    photo_product: {
      frontal: Text;
      left: Text;
      later: Text;
      right: Text;
    };
    information_product:{
      name: Text;
      brand: Text;
      gtin: Text;
      product_code: Text;
      product_code_eu: Text;
      category: Text;
      size: Text;
      color: Text;
      year: Text;
      season: Text;
    };
    traceability_product:{
      time_line: [
        {
          process:Text;
          start_time :Text;
          end_time :Text;
          owner :Text;
        }
      ];
      full_name: Text;
      company_name : Text;
      ruc: Text;
    };
    traceability_blockchain_product:{
      time_line:[
        {
          process: Text;
          label_start: Text;
          hash_start: Text;
          label_end: Text;
          hash_end: Text;
        }
      ]
    }
  };
}