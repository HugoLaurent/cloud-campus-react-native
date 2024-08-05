import { View, Text, StatusBar } from "react-native";
import style from "../style";

export default function News() {
  return (
    <View style={style.container}>
      <StatusBar barStyle="dark-content" />
      <Text>News Content</Text>
    </View>
  );
}
