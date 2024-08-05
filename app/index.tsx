import React, { useState } from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors"; // Assurez-vous que ce fichier existe et contient les styles nécessaires

export default function Index() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isDarkMode
            ? Colors.dark.background
            : Colors.light.background,
        },
      ]}
    >
      <Text
        style={{ color: isDarkMode ? Colors.dark.text : Colors.light.text }}
      >
        Edit app/index.tsx to celui qsdqsd? this screen.
      </Text>
      <Button title="Toggle Dark Mode" onPress={toggleDarkMode} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
