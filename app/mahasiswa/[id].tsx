import { useLocalSearchParams, router } from "expo-router";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { dataMahasiswa } from "../data-mahasiswa";

export default function DetailMahasiswa() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const mhs = dataMahasiswa.find((m) => m.id === id);

  if (!mhs) {
    return (
      <View style={styles.container}>
        <Text>Mahasiswa tidak ditemukan.</Text>
        <Button title="Kembali" onPress={() => router.back()} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detail Mahasiswa</Text>
      <Image source={{ uri: mhs.foto }} style={styles.foto} />
      <Text style={styles.label}>Nama Lengkap:</Text>
      <Text style={styles.value}>{mhs.nama}</Text>
      <Text style={styles.label}>NIM:</Text>
      <Text style={styles.value}>{mhs.nim}</Text>
      <Button title="Kembali" onPress={() => router.back()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", padding: 24, backgroundColor: "#fff" },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 16 },
  foto: { width: 120, height: 120, borderRadius: 60, marginBottom: 20 },
  label: { fontWeight: "bold", fontSize: 16, marginTop: 10 },
  value: { fontSize: 16, marginBottom: 6 },
});