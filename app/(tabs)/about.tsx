import { ScrollView, StyleSheet, Text } from 'react-native';

export default function About() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>About Aplication</Text>
      <Text style={styles.paragraph}>
        Aplikasi ini dikembangkan sebagai bagian dari tugas mata kuliah pemrograman mobile dengan memanfaatkan React Native dan Expo Router. Di dalamnya terdapat tiga halaman utama:
      </Text>
      <Text style={styles.list}>• <Text style={{ fontWeight: 'bold' }}>Home:</Text> Berisi informasi mengenai Universitas Muhammadiyah Makassar, mencakup nama kampus, letak geografis, ringkasan deskripsi, serta gambar pendukung.</Text>
      <Text style={styles.list}>• <Text style={{ fontWeight: 'bold' }}>About:</Text> Menyampaikan tujuan pembuatan aplikasi sebagai tugas kuliah, sekaligus menjelaskan fungsi dari masing-masing halaman (Home, About, dan Profil).</Text>
      <Text style={styles.list}>• <Text style={{ fontWeight: 'bold' }}>Profil:</Text> Memuat identitas pembuat aplikasi, meliputi nama lengkap, NIM, kelas, program studi, fakultas, dan foto profil yang tersimpan secara lokal.</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 12,
    textAlign: 'justify',
  },
  list: {
    fontSize: 16,
    marginBottom: 8,
  },
});
