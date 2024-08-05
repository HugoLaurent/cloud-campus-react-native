import * as React from "react";

import Home from "../components/Home";
import Settings from "../components/Settings";

import { RootStackParamList } from "@/rooter";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Details from "@/components/Details";
import { Button } from "react-native";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="Details"
        component={Details}
        options={({ route }) => ({
          headerRight: () => {
            return (
              <Button
                title="Buy"
                onPress={() => console.log("Buy")}
                disabled={route.params.stock === 0}
              />
            );
          },
        })}
      />
      {/* <Stack.Screen name="Settings" component={Settings} /> */}
    </Stack.Navigator>
  );
}
