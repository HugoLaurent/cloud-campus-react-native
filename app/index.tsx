import style from "@/style";
import React, { useState } from "react";
import Box from "@/components/Box";
import { Text, View, Button, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={style.container}>
      <Box>#1</Box>
      <Box>#2</Box>
      <Box>#3</Box>
    </View>
  );
}
