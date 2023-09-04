import React from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Platform,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";

export default function Home() {
  const handlePress = () => {
    // Action to perform when the button is pressed
    console.log("Button pressed!");
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.logo}>{/* where logo will go */}</View>
        <Text style={styles.title}>Firebolt</Text>
        <Text style={styles.sub_title}>
          A non-custodial bitcoin and lightning wallet all in one.
        </Text>
        <TouchableOpacity style={styles.button_full} onPress={handlePress}>
          <Text style={styles.button_full_text}>Create New Wallet</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button_empty} onPress={handlePress}>
          <Text style={styles.button_empty_text}>Restore Existing Wallet</Text>
        </TouchableOpacity>
        <Text style={styles.disclamer_text}>
          Your wallet, your coins, 100% open-source
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "white",
    height: "100%",
    width: "100%",
    backgroundColor: "black",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    backgroundColor: "white",
    marginTop: "auto",
    marginBottom: 50,
  },
  title: {
    color: "white",
    fontSize: SIZES.huge,
    marginBottom: 10,
  },
  sub_title: {
    maxWidth: "95%",
    color: "white",
    fontSize: SIZES.large,
    textAlign: "center",
  },
  button_full: {
    backgroundColor: "orange",
    width: "100%",
    maxWidth: 300,
    height: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    borderRadius: 5,
  },
  button_full_text: {
    color: "white",
    fontSize: SIZES.large,
  },
  button_empty: {
    width: "100%",
    maxWidth: 300,
    marginTop: 30,
  },
  button_empty_text: {
    color: "orange",
    fontSize: SIZES.large,
    textAlign: "center",
  },
  disclamer_text: {
    color: "white",
    marginTop: "auto",
  },
