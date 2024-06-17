import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Your Goal!" />
        <Button title="Add" />
      </View>
      <View>
        <Text>List of goals... </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "white",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textInput: {
    width: "80%",
    borderWidth: 1,
    borderColor: "#cccccc",
    paddingRight: 8,
    paddingLeft: 8,
  },
});
