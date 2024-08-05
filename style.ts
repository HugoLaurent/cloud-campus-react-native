import { Platform, StyleSheet, StatusBar } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
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
    backgroundColor: "lightgray",
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "darkslategray",
    borderStyle: "dashed",
  },
  boxText: {
    color: "darkslategray",
    fontWeight: "bold",
  },
});
