import React from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import Navbar from "../components/Navbar";
import styles from "../components/styles";
import DismissKeyboard from "../components/DismissKeyboard";

export default function WelcomeScreen({ navigation }) {
  const [homeLocation, onChangeHomeLocation] = React.useState("");
  const [destinationLocation, onChangeDestinationLocation] = React.useState("");

  function loginSubmit() {
    console.log("haiyaa");
    let data = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstParam: "yourValue",
        secondParam: "yourOtherValue",
      }),
    };
    fetch("http://192.168.58.49:8000/login/", data)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <DismissKeyboard>
      <View style={[styles.container, styles.loginContainer]}>
        <Text style={styles.homeTitle}>Login</Text>
        <TextInput
          style={styles.homeInputField}
          onChangeText={(text) => onChangeHomeLocation(text)}
          value={homeLocation}
          placeholder="Email"
        />
        <TextInput
          style={styles.homeInputField}
          onChangeText={(text) => onChangeDestinationLocation(text)}
          value={destinationLocation}
          placeholder="Password"
        />
        <TouchableOpacity style={styles.button} onPress={loginSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </DismissKeyboard>
  );
}
