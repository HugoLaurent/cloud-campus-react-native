import * as React from "react";
import { Platform } from "react-native";

import Home from "../components/Home";
import Settings from "../components/Settings";
import News from "@/components/News";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {Platform.OS === "ios" && (
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="News" component={News} />
          <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
      )}
      {Platform.OS === "android" && (
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={Home} />
          <Tab.Screen name="News" component={News} />
          <Drawer.Screen name="Settings" component={Settings} />
        </Drawer.Navigator>
      )}
      {Platform.OS === "web" && (
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={Home} />
          <Tab.Screen name="News" component={News} />
          <Drawer.Screen name="Settings" component={Settings} />
        </Drawer.Navigator>
      )}
    </NavigationContainer>
  );
}
