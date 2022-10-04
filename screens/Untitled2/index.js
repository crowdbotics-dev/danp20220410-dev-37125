import { Pressable } from "react-native";
import React from "react";
import { View, StyleSheet } from "react-native";

const Untitled2 = ({
  navigation
}) => {
  return <View style={_styles.AutbMUwB}>
      <Pressable onPress={() => navigation.navigate("Untitled3")} style={_styles.sbstzdUD}><View style={_styles.WOqoLjlA}></View></Pressable></View>;
};

export default Untitled2;

const _styles = StyleSheet.create({
  AutbMUwB: {
    backgroundColor: "#f0f0f1",
    padding: 10,
    position: "relative",
    height: "100%"
  },
  WOqoLjlA: {
    left: 73,
    top: 122,
    position: "absolute",
    height: 60,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777"
  },
  sbstzdUD: {
    position: "unset"
  }
});