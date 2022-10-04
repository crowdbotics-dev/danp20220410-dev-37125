import { Pressable } from "react-native";
import React from "react";
import { View, StyleSheet } from "react-native";

const Untitled4 = ({
  navigation
}) => {
  return <View style={_styles.pbNUcKrq}>
      <Pressable onPress={() => navigation.navigate("Untitled5")} style={_styles.dIyBJiaH}><View style={_styles.RvGYqpKQ}></View></Pressable></View>;
};

export default Untitled4;

const _styles = StyleSheet.create({
  pbNUcKrq: {
    backgroundColor: "#f0f0f1",
    padding: 10,
    position: "relative",
    height: "100%"
  },
  RvGYqpKQ: {
    left: 73,
    top: 454,
    position: "absolute",
    height: 60,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777"
  },
  dIyBJiaH: {
    position: "unset"
  }
});