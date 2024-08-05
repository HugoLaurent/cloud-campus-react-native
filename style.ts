import { Platform, StyleSheet, StatusBar } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "center",
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
    width: 100,
    height: 100,
    backgroundColor: "lightgray",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "darkslategray",
    borderStyle: "dashed",
    margin: 10,
  },
  boxText: {
    color: "darkslategray",
    fontWeight: "bold",
  },
});
