import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingTop: Platform.OS === "android" ? 25 : 0,
    padding: 10,
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
    backgroundColor: "#000",
  },

  homeTitle: {
    color: "#fff",
    fontSize: 22,
    marginBottom: 5,
  },

  homeInputField: {
    backgroundColor: "white",
    height: 50,
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    fontSize: 20,
  },

  //Login styles

  loginContainer: {
    justifyContent: "center",
    backgroundColor: "#000",
  },

  button: {
    fontSize: 20,
    backgroundColor: "#007aff",
    padding: 10,
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontSize: 20,
  },
});
