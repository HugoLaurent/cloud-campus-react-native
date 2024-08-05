import { View, Text, StatusBar, Button } from "react-native";
import style from "./../style";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../rooter";

type Props = NativeStackScreenProps<RootStackParamList>;

export default function Settings({ navigation }: Props) {
  return (
    <View style={style.container}>
      <StatusBar barStyle="dark-content" />
      <Text>Settings Screen</Text>
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}
