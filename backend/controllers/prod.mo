import Text "mo:base/Text";
import Trie "mo:base/Trie";
import Principal "mo:base/Principal";
import Debug "mo:base/Debug";
import Types "../types/types";


actor class Product() {

  private stable var modelsDPP : Trie.Trie<Text, Types.ModelDPP_Type> = Trie.empty();
  type Key<K> = Trie.Key<K>;
  func key(t : Text) : Key<Text> { { hash = Text.hash t; key = t } };

  public func createModel(model : Types.ModelDPP_Type) : async Text {
    modelsDPP := Trie.replace(
      modelsDPP,
      key(model.id_model),
      Text.equal,
      ?model,
    ).0;
    return model.id_model;
  };
  public query func readModelId(idModel : Text) : async ?Types.ModelDPP_Type {
    let result = Trie.find(modelsDPP, key(idModel), Text.equal);
    return result;
  };

  private stable var lotsDPP : Trie.Trie<Text, Types.lotdpp_type> = Trie.empty();

  public func createLot(lotDpp : Types.lotdpp_type) : async Text {
    lotsDPP := Trie.replace(
      lotsDPP,
      key(lotDpp.id_lot),
      Text.equal,
      ?lotDpp,
    ).0;
    return lotDpp.id_lot;
  };
  public query func readLotId(idLot : Text) : async ?Types.lotdpp_type {
    let result = Trie.find(lotsDPP, key(idLot), Text.equal);
    return result;
  };

  private stable var productsDPP : Trie.Trie<Text, Types.product_dpp_type> = Trie.empty();

  public func createProductDpp(prodDPP : Types.product_dpp_type) : async Text {
    productsDPP := Trie.replace(
      productsDPP,
      key(prodDPP.id_product),
      Text.equal,
      ?prodDPP,
    ).0;
    return prodDPP.id_product;
  };
  public query func readProductDpp(idProd:Text) : async ?Types.product_dpp_type {
    let result = Trie.find(productsDPP, key(idProd) ,Text.equal);
    return result;
  };

 public shared  func getInfo(gtin_product: Text) : async ?Types.traceability_consolidate {
  Debug.print("getInfo called with gtin_product: " # gtin_product);
  // This function retrieves the traceability information for a product based on its GTIN.
    let Bar = actor("uxrrr-q7777-77774-qaaaq-cai") : actor {
      readModelById: (Text) -> async ?Types.traceability_consolidate;
    };
    let value = await Bar.readModelById(gtin_product);
    return value;
  };

};
