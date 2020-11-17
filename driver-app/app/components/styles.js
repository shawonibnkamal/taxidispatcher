import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },

  navbarContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },

  navbar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  navbarButtonContainer: {
    flex: 1,
  },

  homeHeader: {
    padding: 10,
    backgroundColor: "#000",
  },

  homeTitle: {
    color: "#fff",
    fontSize: 18,
  },
  homeInputField: {
    backgroundColor: "white",
    height: 40,
    borderColor: "black",
    borderWidth: 1,
    marginVertical: 5,
    padding: 5,
  },
});
