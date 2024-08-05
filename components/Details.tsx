import React from "react";
import { View, Text, StatusBar } from "react-native";
import style from "./../style";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../rooter";

type Props = NativeStackScreenProps<RootStackParamList, "Details">;

export default function Details({ route, navigation }: Props) {
  const { title, stock, content } = route.params;

  React.useEffect(() => {
    navigation.setOptions({ title });
  }, []);

  return (
    <View style={style.container}>
      <StatusBar barStyle="dark-content" />
      <Text>
        {content} and stock is {stock}
      </Text>
    </View>
  );
}
