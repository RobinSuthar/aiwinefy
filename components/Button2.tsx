import { StyleSheet, View, Pressable, Text } from "react-native";
import { useRouter } from "expo-router";

type Props = {
  label: string;
};

export default function Button({ label }: Props) {
  const router = useRouter();
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={() => router.push("/Account")}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#FFFFFF",
    width: 320,
    height: 58,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderTopEndRadius: 4,
    borderStartEndRadius: 12,
  },
  buttonLabel: {
    color: "#32AF4D",
    fontSize: 22,
    fontWeight: "bold",
  },
});
