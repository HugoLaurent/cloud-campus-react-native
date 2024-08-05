import { View, Text, StatusBar } from "react-native";
import style from "./../style";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../rooter";

type Props = NativeStackScreenProps<RootStackParamList, "Details">;

export default function Details({ route }: Props) {
  const { title } = route.params;
  return (
    <View style={style.container}>
      <StatusBar barStyle="dark-content" />
      <Text>{title}</Text>
    </View>
  );
}
