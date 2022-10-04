import { Pressable } from "react-native";
import React from "react";
import { View, StyleSheet } from "react-native";

const Untitled1 = () => {
  return <View style={_styles.XXEOLluD}>
      <Pressable onPress={() => navigation.navigate("Untitled2")} style={_styles.rarStJhf}><View style={_styles.umnMmTqh}></View></Pressable></View>;
};

export default Untitled1;

const _styles = StyleSheet.create({
  XXEOLluD: {
    backgroundColor: "#f0f0f1",
    padding: 10,
    position: "relative",
    height: "100%"
  },
  umnMmTqh: {
    left: 57,
    top: 59,
    position: "absolute",
    height: 60,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777"
  },
  rarStJhf: {
    position: "unset"
  }
});