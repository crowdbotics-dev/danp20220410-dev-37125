import { Pressable } from "react-native";
import React from "react";
import { View, StyleSheet } from "react-native";

const Untitled3 = ({
  navigation
}) => {
  return <View style={_styles.gSbWFxUI}>
      <Pressable onPress={() => navigation.navigate("Untitled4")} style={_styles.oNbfkSGz}><View style={_styles.uUCZGWaH}></View></Pressable></View>;
};

export default Untitled3;

const _styles = StyleSheet.create({
  gSbWFxUI: {
    backgroundColor: "#f0f0f1",
    padding: 10,
    position: "relative",
    height: "100%"
  },
  uUCZGWaH: {
    left: 24,
    top: 395,
    position: "absolute",
    height: 60,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777"
  },
  oNbfkSGz: {
    position: "unset"
  }
});