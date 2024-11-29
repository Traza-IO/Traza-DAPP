module{
  type ModelDescription_Type = {
    name : Text;
    collection : Text;
    summary : Text;
  };
  type materials_Type = {
    composition : Text;
    recycling : Text;
    percentage_recycling : Text;
    recycling_income : Text;
  };

  type packing_Type = {
    packingdescriptiontype : Text;
    weight : Text;
    volume : Text;
    recycling : Text;
    percentage_recycling : Text;
  };

  type care_Type = {
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
    brand_information : Text;
    description_model : ModelDescription_Type;
    materials : materials_Type;
    packing : packing_Type;
    care : care_Type;
    tips : tips_Type;
    state : Text;
    user_created : Text;
    creation_date : Text;
    update_date : Text;
  };
  type trace_supplier_type={
    title: Text;
    ruc: Text;
    location: Text;
    coords: Text;
  };
  type time_line_traceability_type={
    process: Text;
    start_time: Text;
    end_time: Text;
    owner: Text;
  };
  type traceability_lot_type = {
    location: Text;
    time_line: [time_line_traceability_type];
  };

 
  type certifications_compliance_type = {
    name: Text;
    organization: Text;
    number: Text;
    audit_date: Text;
    effective_date: Text;
    link: Text;
    logo: Text;
  };
   type compliance_supplier_type = {
    supplier: Text;
    certifications : [certifications_compliance_type];
  };
  type compliance_process_type = {
    process: Text;
    certifications: [certifications_compliance_type]
  };
  type time_line_traceability_lot_type = {
    process: Text;
    hash: Text;

  };
  type traceability_blockchain_lot_type = {
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
  type photo_product_type = {
    frontal: Text;
    left: Text;
    later: Text;
    right: Text;
  };
  type information_product_type = {
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
  type time_line_product_type = {
    process: Text;
    start_time: Text;
    end_time: Text;
    owner: Text;
  };
  type traceability_product_dpp_type = {
      time_line: [time_line_product_type];
  };

  type traceability_blockchain_product_dpp_time_line_type = {
    process: Text;
    hash: Text;
  };
  type traceability_blockchain_product_dpp_type = {
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

}