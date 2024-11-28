import Text "mo:base/Text";
import Trie "mo:base/Trie";
import List "mo:base/List";
import Option "mo:base/Option";
import Nat32 "mo:base/Nat32";

actor class Product() {
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
  type tips_Type = {
    description : Text;
    list : [Text];
  };
  type ModelDPP_Type = {
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
  type trace_supplier_type = {
    title : Text;
    ruc : Text;
    location : Text;
    coords : Text;
  };
  type time_line_traceability_type = {
    process : Text;
    start_time : Text;
    end_time : Text;
    owner : Text;
  };
  type traceability_lot_type = {
    location : Text;
    time_line : [time_line_traceability_type];
  };
  type lotdpp_type = {
    id_lot : Text;
    id_model : Text;
    lot_number_product : Text;
    description_lot : Text;
    trace_supplier : [trace_supplier_type];
    compliance_supplier : Text;
    compliance_process : Text;
    traceability_blockchain_lot : Text;
    state : Text;
    user_created : Text;
    creation_date : Text;
    update_date : Text;
  };

  type product_dpp_type = {
    id_product : Text;
    id_lot : Text;
    gtin_product : Text;
    id_product_parent_company : Text;
    id_product_system_eu : Text;
    photo_product : Text;
    information_product : Text;
    traceability_product : Text;
    traceability_blockchain_product : Text;
    state : Text;
    user_created : Text;
    creation_date : Text;
    update_date : Text;
  };

  private stable var modelsDPP : Trie.Trie<Text, ModelDPP_Type> = Trie.empty();
  type Key<K> = Trie.Key<K>;
  func key(t : Text) : Key<Text> { { hash = Text.hash t; key = t } };

  public func createModel(model : ModelDPP_Type) : async Text {
    modelsDPP := Trie.replace(
      modelsDPP,
      key(model.id_model),
      Text.equal,
      ?model,
    ).0;
    return model.id_model;
  };
  public query func readModelId(idModel : Text) : async ?ModelDPP_Type {
    let result = Trie.find(modelsDPP, key(idModel), Text.equal);
    return result;
  };

  private stable var lotsDPP : Trie.Trie<Text, lotdpp_type> = Trie.empty();

  public func createLot(lotDpp : lotdpp_type) : async Text {
    lotsDPP := Trie.replace(
      lotsDPP,
      key(lotDpp.id_lot),
      Text.equal,
      ?lotDpp,
    ).0;
    return lotDpp.id_lot;
  };
  public query func readLotId(idLot : Text) : async ?lotdpp_type {
    let result = Trie.find(lotsDPP, key(idLot), Text.equal);
    return result;
  };

  private stable var productsDPP : Trie.Trie<Text, product_dpp_type> = Trie.empty();

  public func createProductDpp(prodDPP : product_dpp_type) : async Text {
    productsDPP := Trie.replace(
      productsDPP,
      key(prodDPP.id_product),
      Text.equal,
      ?prodDPP,
    ).0;
    return prodDPP.id_product;
  };

  public query func readProductDpp(idProd : Text) : async ?product_dpp_type {
    let result = Trie.find(productsDPP, key(idProd), Text.equal);
    return result;
  };
};
