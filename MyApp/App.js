import { useFonts } from "expo-font";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigation from "./src/navigations/MainNavigation";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Bold": require("./assets/fonts/Roboto_Condensed-Bold.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto_Condensed-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto_Condensed-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View style={style.section}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
}

const style = StyleSheet.create({
  section: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});