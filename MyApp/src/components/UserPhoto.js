import React from "react";
import { StyleSheet, View } from "react-native";
import AddPhotoButton from "./AddPhotoButton";
import iconPlus from "../../assets/img/Plus.png";

export default function UserPhoto() {
  return (
    <View style={styles.photoContainer}>
      <AddPhotoButton icon={iconPlus} />
    </View>
  );
}

const styles = StyleSheet.create({
  photoContainer: {
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,

    position: "absolute",
    top: -60,
    left: "50%",
    transform: [{ translateX: -60 }],
  },
});
