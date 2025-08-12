import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { dataMahasiswa } from "./data-mahasiswa";

export default function DaftarMahasiswa() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daftar Mahasiswa</Text>
      <FlatList
        data={dataMahasiswa}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Link href={`/mahasiswa/${item.id}` as any} asChild>
            <TouchableOpacity style={styles.item}>
              <Ionicons name="person-circle" size={28} color="#007AFF" style={{ marginRight: 10 }} />
              <Text style={styles.nama}>{item.nama}</Text>
            </TouchableOpacity>
          </Link>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 16, textAlign: "center" },
  item: { flexDirection: "row", alignItems: "center", paddingVertical: 12, paddingHorizontal: 8 },
  nama: { fontSize: 16 },
  separator: { height: 1, backgroundColor: "#eee", marginLeft: 38 },
});