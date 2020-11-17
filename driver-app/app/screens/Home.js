import React from "react";
import { Text, View, TextInput } from "react-native";
import Navbar from "../components/Navbar";
import styles from "../components/styles";
import DismissKeyboard from "../components/DismissKeyboard";

export default function WelcomeScreen({ navigation }) {
  const [homeLocation, onChangeHomeLocation] = React.useState("");
  const [destinationLocation, onChangeDestinationLocation] = React.useState("");

  return (
    <DismissKeyboard>
      <View style={styles.container}>
        <View style={styles.homeHeader}>
          <Text style={styles.homeTitle}>Enter your destination</Text>
          <TextInput
            style={styles.homeInputField}
            onChangeText={(text) => onChangeHomeLocation(text)}
            value={homeLocation}
            placeholder="Choose starting point"
          />
          <TextInput
            style={styles.homeInputField}
            onChangeText={(text) => onChangeDestinationLocation(text)}
            value={destinationLocation}
            placeholder="Enter destination"
          />
        </View>
        <Navbar navigation={navigation} />
      </View>
    </DismissKeyboard>
  );
}
