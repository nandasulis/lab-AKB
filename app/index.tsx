import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
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
          width: 200,
          height: 100,
          backgroundColor: 'goldenrod',
          marginBottom: 20,
        }}
      >
        <Text style={{
          fontSize: 18,
          fontWeight: "bold",
          color: "black",
          alignSelf: "center",
          marginTop: 35, // Adjusted marginTop for better alignment
        }}
        >Wa Nanda Sulystrian</Text>
      </View>

      <View style={{
        borderLeftWidth: 100,
        borderRightWidth: 100,
        borderBottomWidth: 150,
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

    </View>
  );
}

// Tambahkan bentuk segitiga, pil, dan persegi panjang. Di dalam persegi panjang itu berisi nama,
// didalam pil itu berisi nim