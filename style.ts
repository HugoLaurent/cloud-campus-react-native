import { Platform, StyleSheet, StatusBar } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "ghostwhite",
    ...Platform.select({
      ios: {
        paddingTop: 20,
      },
      android: {
        paddingTop: StatusBar.currentHeight,
      },
    }),
  },
  box: {
    width: 300,
    height: 100,
    backgroundColor: "lightgray",
    justifyContent: "center",
    alignItems: "center",
  },
  boxText: {
    color: "darkslategray",
    fontWeight: "bold",
  },
});
