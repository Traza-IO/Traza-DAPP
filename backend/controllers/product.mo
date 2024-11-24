import Text "mo:base/Text";
actor class Product() {
  type ModelDescription_Type={
    name: Text;
    collection: Text;
    summary: Text;
  };
  type materials_Type={
    composition: Text;
    recycling: Text;
    percentage_recycling: Text;
    recycling_income: Text;
  };
  type packing_Type={
    packingdescriptiontype: Text;
    weight: Text;
    volume: Text;
    recycling: Text;
    percentage_recycling: Text;
  };
  type care_Type={
    care: [Text];
    description: Text;
  };
  type tips_Type={
    description: Text;
    list: [Text];
  };
  type ModelDPP_Type = {
    id_model: Text;
    id_model_export: Text;
    summary_materials: Text;
    brand_information: Text;
    description_model: ModelDescription_Type;
    materials: materials_Type;
    packing: packing_Type;
    care: care_Type;
    tips: tips_Type;
    state: Text;
    user_created: Text;
    creation_date: Text;
    update_date: Text;
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
type lotdpp_type={
  id_lot: Text;
  id_model: Text;
  lot_number_product: Text;
  description_lot: Text;
  trace_supplier: [trace_supplier_type];
  compliance_supplier: Text;
  compliance_process: Text;
  traceability_blockchain_lot: Text;
  state: Text;
  user_created: Text;
  creation_date: Text;
  update_date: Text;
  };

  type product_dpp_type = {
    id_product: Text;
    id_lot: Text;
    gtin_product: Text;
    id_product_parent_company: Text;
    id_product_system_eu: Text;
    photo_product: Text;
    information_product: Text;
    traceability_product: Text;
    traceability_blockchain_product: Text;
    state: Text;
    user_created: Text;
    creation_date: Text;
    update_date: Text;
  };





};
