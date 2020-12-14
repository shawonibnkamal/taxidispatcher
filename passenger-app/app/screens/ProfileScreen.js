import React from "react";
import { Text, View } from "react-native";
import Navbar from "../components/Navbar";
import styles from "../components/styles";

export default function ProfileScreen({ navigation, user }) {
  return (
    <View style={styles.container}>
      <Navbar navigation={navigation} />
      <Text>Profile</Text>
      <Text>
        Logged in as {user.first_name} {user.last_name}
      </Text>
    </View>
  );
}
