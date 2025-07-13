import React, { useState } from "react";
import { Image, FlatList, ScrollView, Text, TouchableOpacity, View } from "react-native";

const mainImages = [
  "https://picsum.photos/id/1011/200",
  "https://picsum.photos/id/1012/200",
  "https://picsum.photos/id/1013/200",
  "https://picsum.photos/id/1014/200",
  "https://picsum.photos/id/1015/200",
  "https://picsum.photos/id/1016/200",
  "https://picsum.photos/id/1018/200",
  "https://picsum.photos/id/1020/200",
  "https://picsum.photos/id/1024/200",
];

const altImages = [
  "https://picsum.photos/id/1025/200",
  "https://picsum.photos/id/1026/200",
  "https://picsum.photos/id/1027/200",
  "https://picsum.photos/id/1028/200",
  "https://picsum.photos/id/1029/200",
  "https://picsum.photos/id/1030/200",
  "https://picsum.photos/id/1031/200",
  "https://picsum.photos/id/1032/200",
  "https://picsum.photos/id/1033/200",
];

export default function Index() {
  const [images, setImages] = useState(
    mainImages.map((uri, index) => ({
      main: uri,
      alt: altImages[index],
      current: uri,
      scale: 1,
    }))
  );

  const handlePress = (index: number) => {
    setImages((prevImages) =>
      prevImages.map((img, i) => {
        if (i === index) {
          const nextScale = Math.min(img.scale + 0.2, 2); // maksimum 2x
          const nextImage = img.current === img.main ? img.alt : img.main;
          return {
            ...img,
            current: nextImage,
            scale: nextScale,
          };
        }
        return img;
      })
    );
  };

  return (
    <ScrollView contentContainerStyle={{ alignItems: "center", paddingBottom: 40 }}>
      {/* Informasi Mahasiswa */}
      <View style={{ backgroundColor: "lightgrey", padding: 10, alignItems: "center" }}>
        <Text style={{ fontSize: 20, color: "black" }}>105841110622</Text>
        <Text style={{ color: "red", fontWeight: "bold" }}>Wa Nanda Sulystrian</Text>
      </View>

      {/* Dekorasi */}
      <View style={{ width: 20, height: 20, backgroundColor: "green", borderRadius: 100, marginTop: 10 }} />

      <View
        style={{
          width: 100,
          height: 180,
          backgroundColor: "goldenrod",
          borderRadius: 50,
          marginBottom: 20,
          marginTop: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 13, fontWeight: "bold" }}>105841110622</Text>
      </View>

      <View
        style={{
          width: 100,
          height: 50,
          backgroundColor: "goldenrod",
          marginBottom: 20,
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 10, fontWeight: "bold", color: "black", alignSelf: "center" }}>
          Wa Nanda Sulystrian
        </Text>
      </View>

      <View
        style={{
          width: 0,
          height: 0,
          borderLeftWidth: 50,
          borderRightWidth: 50,
          borderBottomWidth: 100,
          borderStyle: "solid",
          backgroundColor: "transparent",
          borderLeftColor: "transparent",
          borderRightColor: "transparent",
          borderBottomColor: "goldenrod",
        }}
      />

      <View style={{ width: 20, height: 20, borderRadius: 100 }} />

      {/* Gambar Profil */}
      <View style={{ flexDirection: "row", justifyContent: "center", marginVertical: 20 }}>
        <Image style={{ width: 100, height: 100, marginRight: 10 }} source={{ uri: "https://simak.unismuh.ac.id/upload/mahasiswa/105841110622_.jpg" }} />
        <Image style={{ width: 100, height: 100 }} source={{ uri: "https://uploads-us-west-2.insided.com/figma-en/attachment/7105e9c010b3d1f0ea893ed5ca3bd58e6cec090e.gif" }} />
      </View>

      {/* Grid Gambar 3x3 */}
      <FlatList
        data={images}
        numColumns={3}
        scrollEnabled={false}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View
            style={{
              width: 110,
              height: 110,
              justifyContent: "center",
              alignItems: "center",
              margin: 5,
              overflow: "hidden",
            }}
          >
            <TouchableOpacity onPress={() => handlePress(index)}>
              <Image
                source={{ uri: item.current }}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 10,
                  transform: [{ scale: item.scale }],
                }}
              />
            </TouchableOpacity>
          </View>
        )}
      />
    </ScrollView>
  );
}
