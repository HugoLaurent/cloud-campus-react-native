import { View, Text, StatusBar } from "react-native";
import style from "./../style";

export default function Settings() {
  return (
    <View style={style.container}>
      <StatusBar barStyle="dark-content" />
      <Text>Settings Screen</Text>
    </View>
  );
}
