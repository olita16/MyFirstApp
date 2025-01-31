import React from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import InputField from "../components/InputField";
import PrimaryButton from "../components/PrimaryButton";
import { useFonts } from "expo-font";
import UserPhoto from "../components/UserPhoto";
import BgImage from "../../assets/img/BG for App.png";

export default function RegistrationScreen() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("../../assets/fonts/Roboto_Condensed-Regular.ttf"),
    "Roboto-Medium": require("../../assets/fonts/Roboto_Condensed-Medium.ttf"),
    "Roboto-Bold": require("../../assets/fonts/Roboto_Condensed-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <ImageBackground source={BgImage} resizeMode="cover" style={styles.img}>
      <View style={styles.container}>
        <View style={styles.containerForm}>
          <UserPhoto />
          <Text style={styles.mainTitle}>Реєстрація</Text>
          <InputField placeholder="Логін" />
          <InputField placeholder="Адреса електронної пошти" />
          <InputField placeholder="Пароль" isTextShow={true} />
          <PrimaryButton textButton="Зареєструватися" />
          <Text style={styles.secondaryText}>Вже є аккаунт? Увійти</Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  img: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  containerForm: {
    position: "relative",
    width: "100%",
    height: 549,
    justifyContent: "flex- start",
    alignItems: "center",
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  mainTitle: {
    marginTop: 92,
    marginBottom: 32,
    fontFamily: "Roboto-Medium",
    fontSize: 30,
  },
  secondaryText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#1B4371",
  },
});
