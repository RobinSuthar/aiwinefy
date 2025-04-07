import Button from "@/components/Button";
import Button2 from "@/components/Button2";
import { Link } from "expo-router";
import { View, StyleSheet, ImageBackground } from "react-native";

const PlaceholderImage = require("@/assets/images/login.png");

export default function Question1() {
  return (
    <ImageBackground source={PlaceholderImage} style={styles.background}>
      <View style={styles.content}></View>
      <View style={styles.content}>
        <Button2 label="Continue with email" />
        <Button label="Continue with google" />
        <Button label="Continue with facebook" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "stretch", // or "contain" depending on your layout
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flex: 1,
    gap: 16,
    marginTop: 55,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
