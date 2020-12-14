import React from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import Navbar from "../components/Navbar";
import styles from "../components/styles";
import DismissKeyboard from "../components/DismissKeyboard";
import axios from "axios";
import * as SecureStore from "expo-secure-store";
import config from "../config";

export default function LoginScreen({ navigation, setUser }) {
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");

  React.useEffect(() => {
    //remove token
    SecureStore.deleteItemAsync("authJwt");
    setUser(false);
  }, []);

  const loginSubmit = () => {
    console.log(email);
    console.log(password);
    axios
      .post(config.apiUrl + "/api/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        // console.log(response.data);
        SecureStore.setItemAsync("authJwt", response.data.token);
        setUser(response.data.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <DismissKeyboard>
      <View style={[styles.container, styles.loginContainer]}>
        <Text style={styles.loginTitle}>Login</Text>
        <TextInput
          style={styles.homeInputField}
          onChangeText={(text) => onChangeEmail(text)}
          value={email}
          placeholder="Email"
        />
        <TextInput
          style={styles.homeInputField}
          onChangeText={(text) => onChangePassword(text)}
          value={password}
          secureTextEntry={true}
          placeholder="Password"
        />
        <TouchableOpacity
          style={styles.appButtonContainer}
          onPress={loginSubmit}
        >
          <Text style={styles.appButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </DismissKeyboard>
  );
}
