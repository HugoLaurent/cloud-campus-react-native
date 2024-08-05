import { View, Text, StatusBar, Button } from "react-native";
import style from "./../style";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../rooter";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function Home({ navigation }: Props) {
  return (
    <View style={style.container}>
      <StatusBar barStyle="dark-content" />
      <Text>Home Screen</Text>
      <Button
        title="First Item"
        onPress={() => navigation.navigate("Details", { title: "First Item" })}
      />
      <Button
        title="Second Item"
        onPress={() => navigation.navigate("Details", { title: "Second Item" })}
      />
      <Button
        title="Third Item"
        onPress={() => navigation.navigate("Details", { title: "Third Item" })}
      />
    </View>
  );
}
