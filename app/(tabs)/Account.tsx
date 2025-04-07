import AccountForm from "@/components/AccountCreate";
import Button from "@/components/Button";
import { Link } from "expo-router";
import { View, StyleSheet, ImageBackground, Dimensions } from "react-native";

const PlaceholderImage = require("@/assets/images/calgary.png");

export default function Account() {
  return (
    <View style={styles.container}>
      {/* Top Half: Background Image */}
      <ImageBackground
        source={PlaceholderImage}
        style={styles.topHalf}
        resizeMode="cover"
      />

      {/* Bottom Half: Content */}
      <View style={styles.bottomHalf}>
        {/* Add your content here (e.g., buttons, text, etc.) */}
        <AccountForm />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topHalf: {
    flex: 1, // top 1 of 2 (50%)
    width: "100%",
  },
  bottomHalf: {
    flex: 1, // bottom 1 of 2 (50%)
    backgroundColor: "EFEFEF",
    justifyContent: "center",
    alignItems: "center",
  },
});
