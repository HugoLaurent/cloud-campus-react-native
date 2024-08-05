import style from "@/style";
import React, { useState } from "react";
import Box from "@/components/Box";
import { Text, View, Button, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

const boxes = new Array(10).fill(null).map((_, i) => i + 1);

export default function Index() {
  return (
    <View style={style.container}>
      <StatusBar hidden={false} />
      {boxes.map((i) => (
        <Box key={i}>#{i}</Box>
      ))}
    </View>
  );
}
