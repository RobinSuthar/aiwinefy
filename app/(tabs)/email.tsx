import Button from "@/components/Button";
import { Link } from "expo-router";
import { View, StyleSheet, ImageBackground } from "react-native";

const PlaceholderImage = require("@/assets/images/login.png");

export default function Index() {
  return (
    <ImageBackground source={PlaceholderImage} style={styles.background}>
      <View style={styles.content}>
        {/* Add your content here (e.g., buttons, text, etc.) */}
      </View>
      <View>
        <Link href={"/"}>Contine with email</Link>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover", // or "contain" depending on your layout
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
