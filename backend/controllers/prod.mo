import Text "mo:base/Text";
import Trie "mo:base/Trie";
import Principal "mo:base/Principal";
import Debug "mo:base/Debug";
import Types "../types/types";


persistent actor class Product() {

private stable var traceabilityDPP : Trie.Trie<Text, Types.traceability_consolidate> = Trie.empty();

  type Key<K> = Trie.Key<K>;
  func key(t : Text) : Key<Text> { { hash = Text.hash t; key = t } };

  
  public func createUnitData(unit : Types.traceability_consolidate) : async Text {
    Debug.print("Función saludar llamada con: " # unit.gtin_product);
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

  public query func getImage(name : Text) : async ?Blob {
   Debug.print("uploadImage Prototipador called with img name: " # name);
   return Trie.find(imagesDPP, key(name), Text.equal);
  };


};
