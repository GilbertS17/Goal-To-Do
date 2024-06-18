import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, Modal } from "react-native";

export default function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.addGoalHandler(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your Goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <Button title="Add" onPress={addGoalHandler} />
          <Button title="Back" onPress={props.close} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderColor: "#cccccc",
  },
  textInput: {
    width: "80%",
    borderWidth: 1,
    borderColor: "#cccccc",
    paddingRight: 8,
    paddingLeft: 8,
    paddingTop: 5,
    paddingBottom: 5,
    marginBottom: 20,
  },
  buttonContainer: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "80%",
  },
});
