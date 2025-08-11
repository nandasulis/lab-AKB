import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Profile() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Profil Mahasiswa</Text>
      <Image source={require('../../assets/images/nanda.jpg')} style={styles.image} />
      <View style={styles.infoBox}>
        <Text style={styles.label}>Nama Lengkap:</Text>
        <Text style={styles.value}>Wa Nanda Sulystrian</Text>

        <Text style={styles.label}>NIM:</Text>
        <Text style={styles.value}>105841110622</Text>

        <Text style={styles.label}>Kelas:</Text>
        <Text style={styles.value}>4C</Text>

        <Text style={styles.label}>Jurusan:</Text>
        <Text style={styles.value}>Informatika</Text>

        <Text style={styles.label}>Fakultas:</Text>
        <Text style={styles.value}>Fakultas Teknik</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 12,
    textAlign: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  infoBox: {
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  value: {
    fontSize: 16,
    marginBottom: 6,
    textAlign: 'center',
  },
});
