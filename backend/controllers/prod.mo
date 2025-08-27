import Text "mo:base/Text";
import Trie "mo:base/Trie";
import Debug "mo:base/Debug";
import Types "../types/types";


persistent actor class Product() {

private stable var traceabilityDPP : Trie.Trie<Text, Types.traceability_consolidate> = Trie.empty();

  type Key<K> = Trie.Key<K>;
  func key(t : Text) : Key<Text> { { hash = Text.hash t; key = t } };

  
  public func createUnitData(unit : Types.traceability_consolidate) : async Text {
    traceabilityDPP := Trie.replace(
      traceabilityDPP,
      key(unit.gtin_product),
      Text.equal,
      ?unit,
    ).0;
    return unit.gtin_product;
  };

  public query func getInfo(gtin_product : Text) : async ?Types.traceability_consolidate {
    Debug.print("getInfo Prototipador called with gtin_product: " # gtin_product);
    Trie.find(traceabilityDPP, key(gtin_product), Text.equal);
  };
  
  stable var imagesDPP : Trie.Trie<Text, Blob> = Trie.empty();

  public func uploadImage(name : Text, content : Blob) : async Text {
    Debug.print("uploadImage Prototipador called with img name: " # name);
    imagesDPP := Trie.replace(
      imagesDPP,
      key(name),
      Text.equal,
      ?content,
    ).0;
    return name;
  };

  private func getImage(name : Text) : async ?Blob {
   Debug.print("uploadImage Prototipador called with img name: " # name);
   return Trie.find(imagesDPP, key(name), Text.equal);
  };

 private func transformTraceability(traceability : Types.traceability_consolidate) : async Types.traceability_consolidate_public {
        {
                id_model= traceability.id_model;
                id_model_export= traceability.id_model_export;
                summary_materials= traceability.summary_materials;
                name_model= traceability.name_model;
                brand_information= traceability.brand_information;
                description_header= traceability.description_header;
                description_model= traceability.description_model;
                materials= traceability.materials;
                packing= traceability.packing;
                care= traceability.care;
                id_lot= traceability.id_lot;
                lot_number_product= traceability.lot_number_product;
                trace_supplier= traceability.trace_supplier;
                traceability_batch= traceability.traceability_batch;
                compliance_supplier= traceability.compliance_supplier;
                compliance_process= traceability.compliance_process;
                traceability_blockchain_lot= traceability.traceability_blockchain_lot;
                gtin_product= traceability.gtin_product;
                id_product_parent_company= traceability.id_product_parent_company;
                id_product_system_eu= traceability.id_product_system_eu;
                photo_product = {
                  frontal= await getImageFree(traceability.photo_product.frontal);
                  left= await getImage(traceability.photo_product.left);
                  later= await getImage(traceability.photo_product.later);
                  right= await getImage(traceability.photo_product.right);
                };
                information_product= traceability.information_product;
                traceability_product= traceability.traceability_product;
                traceability_blockchain_product= traceability.traceability_blockchain_product;
        }
   }
};
