import React from "react";
import { StyleSheet, View } from "react-native";
import Task from "./Task";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const TaskLayout = () => {
  const { todoList } = useSelector((state) => state.toDo);
  const dispatch = useDispatch();
  const [state, setState] = useState({
    id: "",
    content: "",
    contentError: null,
  });
  return (
    <View style={styles.items}>
      {todoList.map(({ id, content, completed }) => {
        return <Task key={id} text={content} completed={completed} id = {id}/>;
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  items: {
    paddingTop: 16,
  },
});
export default TaskLayout;
