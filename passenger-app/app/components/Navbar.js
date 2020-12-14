import React from "react";
import { Text, View, Button } from "react-native";
import styles from "./styles";

export default function Navbar({ navigation }) {
  return (
    <View style={styles.navbarContainer}>
      <Button
        title="Menu"
        style={styles.navbarMenu}
        onPress={() => navigation.openDrawer()}
      />
      <Text style={styles.navbarTitle}>TaxiDispatcher</Text>
      <Text>
        {" "}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </Text>
    </View>
  );
}
