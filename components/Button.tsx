import { StyleSheet, View, Pressable, Text } from "react-native";

type Props = {
  label: string;
};

export default function Button({ label }: Props) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={styles.button}
        onPress={() => alert("You pressed a button.")}
      >
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#32AF4D",
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
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
});
