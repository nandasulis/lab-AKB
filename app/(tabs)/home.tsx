import { Image, ScrollView, Text } from 'react-native';

export default function Home() {
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center', padding: 24 }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16, textAlign: 'center' }}>Unismuh Makassar</Text>
            <Image
                source={require('../../assets/images/unismuh.png')}
                style={{ width: 220, height: 140, borderRadius: 12, marginBottom: 16 }}
                resizeMode="contain"
            />
            <Image
                source={require('../../assets/images/Unismuh2.jpg')}
                style={{ width: 180, height: 110, borderRadius: 10, marginBottom: 20 }}
                resizeMode="contain"
            />
            <Text style={{ fontSize: 16, marginBottom: 8, textAlign: 'justify' }}>
                Universitas Muhammadiyah Makassar adalah perguruan tinggi swasta yang berdiri sejak 1963 di bawah naungan Persyarikatan Muhammadiyah. Kampus ini memiliki delapan fakultas dengan program studi mulai dari Diploma hingga Pascasarjana. Berlokasi di Jl. Sultan Alauddin No. 259, Makassar, Unismuh mengusung moto Ilmu Amaliah, Amal Ilmiah, Akhlaqul Karimah.
            </Text>
        </ScrollView>
    );
}
