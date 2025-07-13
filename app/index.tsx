import { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  // State untuk menyimpan status setiap gambar (alternatif atau tidak)
  const [imageStates, setImageStates] = useState(Array(9).fill(false));
  // State untuk menyimpan scale setiap gambar
  const [imageScales, setImageScales] = useState(Array(9).fill(1));

  // Fungsi untuk handle klik gambar - hanya mempengaruhi gambar yang diklik
  const handleImagePress = (index: number) => {
    // Toggle antara gambar utama dan alternatif untuk gambar yang diklik saja
    const newImageStates = [...imageStates];
    newImageStates[index] = !newImageStates[index];
    setImageStates(newImageStates);

    // Increase scale hanya untuk gambar yang diklik, gambar lain tidak terpengaruh
    const newImageScales = [...imageScales];
    if (newImageScales[index] < 2) {
      newImageScales[index] = Math.min(newImageScales[index] + 0.2, 2);
    } else {
      newImageScales[index] = 1; // Reset ke ukuran normal hanya untuk gambar ini
    }
    setImageScales(newImageScales);
  };

  // Array gambar utama
  const mainImages = [
    "https://simak.unismuh.ac.id/upload/mahasiswa/105841110622_.jpg",
    "https://picsum.photos/200/200?random=1",
    "https://picsum.photos/200/200?random=2",
    "https://picsum.photos/200/200?random=3",
    "https://uploads-us-west-2.insided.com/figma-en/attachment/7105e9c010b3d1f0ea893ed5ca3bd58e6cec090e.gif",
    "https://picsum.photos/200/200?random=4",
    "https://picsum.photos/200/200?random=5",
    "https://picsum.photos/200/200?random=6",
    "https://picsum.photos/200/200?random=7"
  ];

  // Array gambar alternatif
  const altImages = [
    "https://picsum.photos/200/200?random=8",
    "https://picsum.photos/200/200?random=9",
    "https://picsum.photos/200/200?random=10",
    "https://picsum.photos/200/200?random=11",
    "https://picsum.photos/200/200?random=12",
    "https://picsum.photos/200/200?random=13",
    "https://picsum.photos/200/200?random=14",
    "https://picsum.photos/200/200?random=15",
    "https://picsum.photos/200/200?random=16"
  ];
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >

      <ScrollView contentContainerStyle={{
        flexGrow: 1,
      }}>

        <View style={
          {
            backgroundColor: "lightgrey",
          }
        }>

          <Text style={
            {
              fontSize: 20,
              color: "black",
            }
          }>105841110622</Text>
          <Text style={
            {
              color: "red",
              fontWeight: "bold",
            }
          }>Wa Nanda Sulystrian</Text>
        </View>

        <View style={{
          width: 20,
          height: 20,
          backgroundColor: "green",
          borderRadius: 100,
        }}>
        </View>

        <View
          style={{
            width: 100,
            height: 180,
            backgroundColor: "goldenrod",
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            marginBottom: 20,
            alignSelf: "center",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <Text style={{
            fontSize: 13,
            fontWeight: "bold"
          }}>
            105841110622</Text>
        </View>

        <View
          style={{
            width: 100,
            height: 50,
            backgroundColor: 'goldenrod',
            marginBottom: 20,
          }}
        >
          <Text style={{
            fontSize: 10,
            fontWeight: "bold",
            color: "black",
            alignSelf: "center",
            marginTop: 18, // Adjusted marginTop for better alignment
          }}
          >Wa Nanda Sulystrian</Text>
        </View>

        <View style={{
          borderLeftWidth: 50,
          borderRightWidth: 50,
          borderBottomWidth: 100,
          backgroundColor: 'transparent',
          borderRightColor: 'transparent',
          borderLeftColor: 'transparent',
          borderBottomColor: 'goldenrod',
        }}>
        </View>

        <View style={{
          width: 20,
          height: 20,
          borderRadius: 100,
        }}>
        </View>

        {/* Grid Gambar 3x3 Interaktif dengan 18 gambar total */}
        <View style={{
          width: 300,
          height: 300,
          flexDirection: 'column',
          marginTop: 20,
        }}>

          <Text style={{
            fontSize: 16,
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: 10,
          }}>Grid Gambar Interaktif (Klik untuk mengubah dan memperbesar)</Text>

          {/* Baris 1 */}
          <View style={{ flexDirection: 'row' }}>
            {[0, 1, 2].map((index) => (
              <TouchableOpacity key={index} onPress={() => handleImagePress(index)}>
                <Image
                  style={{
                    width: 100,
                    height: 100,
                    borderWidth: 2,
                    borderColor: imageStates[index] ? 'red' : 'gray',
                    transform: [{ scale: imageScales[index] }],
                  }}
                  source={{
                    uri: imageStates[index] ? altImages[index] : mainImages[index],
                  }}
                />
              </TouchableOpacity>
            ))}
          </View>

          {/* Baris 2 */}
          <View style={{ flexDirection: 'row' }}>
            {[3, 4, 5].map((index) => (
              <TouchableOpacity key={index} onPress={() => handleImagePress(index)}>
                <Image
                  style={{
                    width: 100,
                    height: 100,
                    borderWidth: 2,
                    borderColor: imageStates[index] ? 'red' : 'gray',
                    transform: [{ scale: imageScales[index] }],
                  }}
                  source={{
                    uri: imageStates[index] ? altImages[index] : mainImages[index],
                  }}
                />
              </TouchableOpacity>
            ))}
          </View>

          {/* Baris 3 */}
          <View style={{ flexDirection: 'row' }}>
            {[6, 7, 8].map((index) => (
              <TouchableOpacity key={index} onPress={() => handleImagePress(index)}>
                <Image
                  style={{
                    width: 100,
                    height: 100,
                    borderWidth: 2,
                    borderColor: imageStates[index] ? 'red' : 'gray',
                    transform: [{ scale: imageScales[index] }],
                  }}
                  source={{
                    uri: imageStates[index] ? altImages[index] : mainImages[index],
                  }}
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>

      </ScrollView>

    </View>
  );
}
