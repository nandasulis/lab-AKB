import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import Octions from '@expo/vector-icons/Octicons';
import { ScrollView, Text, View } from "react-native";

export default function Index() {
  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>

      <View style={{ height: 20 }}>
        <FontAwesome name="music" size={45} color="grey" />
        <FontAwesome name="search" size={45} color="grey" />
        <AntDesign name="upcircle" size={45} color="black" />
        <AntDesign name="downcircle" size={45} color="black" />
        <MaterialIcons name="6-ft-apart" size={45} color="green" />
        <MaterialIcons name="abc" size={45} color="green" />
        <Ionicons name="arrow-up-circle-sharp" size={45} color="brown" />
        <Ionicons name="at" size={45} color="brown" />
        <Octions name="feed-discussion" size={45} color="purple" />
        <Octions name="feed-heart" size={45} color="red" />
      </View>

    </ScrollView>
  );
}


