import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Fontisto from "@expo/vector-icons/Fontisto";

const OnboardScreen = () => (
  <SafeAreaView
    style={{
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <Fontisto name="instagram" size={70} color="black" />
    <Text
      style={{
        fontSize: 40,
        marginTop: 20,
        textShadowColor: "#559ab5",
        textShadowRadius: 20,
        fontFamily: "serif",
      }}
    >
      Welcome 👋🏻
    </Text>
  </SafeAreaView>
);

export default OnboardScreen;

const styles = StyleSheet.create({});
