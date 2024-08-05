import style from "@/style";
import React, { useState } from "react";
import { Text, View, Button, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={style.container}>
      <View style={style.box}>
        <Text style={style.boxText}>Hello, world!</Text>
      </View>
    </View>
  );
}
