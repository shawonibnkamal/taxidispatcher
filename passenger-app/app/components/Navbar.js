import React from "react";
import { Text, View, Button } from "react-native";
import styles from "./styles";

export default function Navbar({ navigation }) {
  return (
    <View style={styles.navbarContainer}>
      <View style={styles.navbar}>
        <View
          style={[
            styles.navbarButtonContainer,
            {
              paddingRight: 2,
            },
          ]}
        >
          <Button
            title="Call a cab"
            onPress={() => navigation.navigate("Home")}
          />
        </View>
        <View style={styles.navbarButtonContainer}>
          <Button
            title="Profile"
            onPress={() => navigation.navigate("Profile", { name: "Jane" })}
          />
        </View>
      </View>
    </View>
  );
}
