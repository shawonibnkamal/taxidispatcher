import React from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import Navbar from "../components/Navbar";
import styles from "../components/styles";
import DismissKeyboard from "../components/DismissKeyboard";

export default function WelcomeScreen({ navigation }) {
  const [homeLocation, onChangeHomeLocation] = React.useState("");
  const [destinationLocation, onChangeDestinationLocation] = React.useState("");

  return (
    <DismissKeyboard>
      <View style={styles.container}>
        <Navbar navigation={navigation} />
        <View style={(styles.padding, styles.homeHeader)}>
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
          <TouchableOpacity style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}>Call a cab</Text>
          </TouchableOpacity>
        </View>
      </View>
    </DismissKeyboard>
  );
}
