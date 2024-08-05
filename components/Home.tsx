import { View, Text, StatusBar } from "react-native";
import style from "./../style";

export default function Home() {
  return (
    <View style={style.container}>
      <StatusBar barStyle="dark-content" />
      <Text>Home Screen</Text>
    </View>
  );
}
