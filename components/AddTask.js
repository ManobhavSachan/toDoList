import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Keyboard,
} from "react-native";
import { useDispatch } from "react-redux";
import { addToDo } from "./../redux/reducers";

const screenWidth = Dimensions.get("window").width;
const AddTask = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const handleChange = () => {
    Keyboard.dismiss();
    if (text === "") {
      alert("Please Write Something.");
      return;
    }
    dispatch(
      addToDo({
        newContent: text,
      })
    );
    setText("");
  };
  const handleKey = (e) => {
    if (e.nativeEvent.key === "Enter") {
      handleChange();
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.writeTaskWrapper}
    >
      <TouchableOpacity onPress={handleChange}>
        <View style={styles.addWrapper}>
          <Text style={styles.addText}>+</Text>
        </View>
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder={"Add Task"}
        value={text}
        onChangeText={(newText) => setText(newText)}
        onKeyPress={handleKey}
        multiline={Platform.OS === "web" ? false : true}
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  writeTaskWrapper: {
    backgroundColor: "#F9F9FB",
    position: "absolute",
    bottom: 10,
    width: screenWidth - 32,
    left: 16,
    paddingLeft: 16,
    paddingRight: 16,

    borderRadius: 16,
    flexDirection: "row",

    height: 72,
    alignItems: "center",
  },
  addWrapper: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  addText: {
    paddingBottom: 5,

    fontWeight: "300",
    color: "#98A2B3",
    fontSize: 40,
  },
  input: {
    width: screenWidth - 80,
    height: 72,
    paddingLeft: 16,

    fontWeight: "500",
    fontSize: 16,
    color: "#ABB6C8",
  },
});
export default AddTask;
