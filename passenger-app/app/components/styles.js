import { StyleSheet } from "react-native";

export default StyleSheet.create({
  padding: {
    padding: 10,
  },

  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },

  // Navbar

  navbarContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  navbarTitle: {
    fontSize: 18,
    color: "#49565c",
  },

  navbarMenu: {
    backgroundColor: "white",
  },

  // Home

  homeHeader: {
    padding: 10,
  },

  homeTitle: {
    marginBottom: 5,
  },

  homeInputField: {
    backgroundColor: "white",
    height: 50,
    borderColor: "#d4ecfa",
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },

  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#2da0fc",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },

  //Login styles
  loginTitle: {
    color: "#49565c",
    marginBottom: 5,
  },

  loginContainer: {
    justifyContent: "center",
    padding: 10,
  },
});
