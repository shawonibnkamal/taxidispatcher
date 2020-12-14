import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Text, View, SafeAreaView, Button } from "react-native";
import Home from "./app/screens/Home";
import ProfileScreen from "./app/screens/ProfileScreen";
import LoginScreen from "./app/screens/LoginScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import * as SecureStore from "expo-secure-store";
import config from "./app/config";
import axios from "axios";

const Drawer = createDrawerNavigator();

export default function App({ navigation }) {
  const [user, setUser] = useState(undefined);

  const getUser = (jwt) => {
    axios
      .get(config.apiUrl + "/api/user", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      })
      .then((res) => {
        // console.log(res.data);
        setUser(res.data);
      })
      .catch((err) => {
        SecureStore.deleteItemAsync("authJwt");
        console.log("Error in authentication");
        console.log(err);
        setUser(false);
      });
  };

  useEffect(() => {
    const getToken = async () => {
      if (!(await SecureStore.getItemAsync("authJwt"))) {
        console.log("no token");
        setUser(false);
      } else {
        // console.log(await SecureStore.getItemAsync("authJwt"));
        getUser(await SecureStore.getItemAsync("authJwt"));
      }
    };

    getToken();
  }, []);

  if (user == undefined) {
    return <Text>Loading</Text>;
  } else if (user === false) {
    return <LoginScreen setUser={setUser} />;
  } else {
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Profile">
            {(props) => <ProfileScreen user={user} {...props} />}
          </Drawer.Screen>
          <Drawer.Screen name="Logout">
            {(props) => <LoginScreen setUser={setUser} {...props} />}
          </Drawer.Screen>
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}
