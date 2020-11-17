import React from "react";
import { Text, View } from "react-native";
import Navbar from "../components/Navbar";
import styles from "../components/styles";

export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text> Profile </Text>
      <Navbar navigation={navigation} />
    </View>
  );
}
