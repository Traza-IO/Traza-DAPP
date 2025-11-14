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

  public query func getAllElements() : async  [{gtin: Text; description: Text}]{
    let array = Trie.toArray(traceabilityDPP, func (k, v) = {gtin = v.gtin_product ; description = v.description_model.name});
    return array;
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
  
  public query func getAllImages() : async  [{name: Text}]{
    let names = Trie.toArray(imagesDPP, func (k, v) = {name = k});
    return names;
  };

  stable var colorBrandsDPP : Trie.Trie<Text, Text> = Trie.empty();

  public func uploadColorBrand(gtin : Text, content : Text) : async Text {
    Debug.print("uploadColorBrand Prototipador called with gtin: " # gtin);
    colorBrandsDPP := Trie.replace(
      colorBrandsDPP,
      key(gtin),
      Text.equal,
      ?content,
    ).0;
    return gtin;
  };

  public query func getColorBrand(gtin : Text) : async ?Text {
    Debug.print("getColorBrand Prototipador called with gtin: " # gtin);
    return Trie.find(colorBrandsDPP, key(gtin), Text.equal);
  };
  
  public query func getAllColorBrands() : async  [{gtin: Text}]{
    let gtins = Trie.toArray(colorBrandsDPP, func (k, v) = {gtin = k});
    return gtins;
  };
};