import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

export default function PrimaryButton({ textButton }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={() => console.log("Pressed")}
    >
      <Text style={styles.btnText}>{textButton}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 343,
    height: 51,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 43,
    marginBottom: 16,

    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },
  btnText: {
    color: "white",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  pressed: {
    opacity: 0.6,
  },
});
