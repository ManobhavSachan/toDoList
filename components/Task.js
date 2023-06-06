import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
    Image,
} from "react-native";
import { useDispatch } from "react-redux";
import { completeToDo } from "../redux/reducers";

const screenWidth = Dimensions.get("window").width;
const tick = require("./../images/Tick.png");
const Task = (props) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(
      completeToDo({
        id: props.id,
      })
    );
    // console.log(props.completed);
  };
  return (
    <TouchableOpacity onPress={handleClick}>
      <View style={styles.item}>
        <View style={styles.itemsLeft}>
          <View style={styles.completedCircle}>
            {props.completed ? (
              <Image source = {tick} style = {styles.tick}/>
            ) : (
              <View style={styles.circle} />
            )}
          </View>
          <Text style={styles.itemText}>{props.text}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#F9F9FB",
    paddingLeft: 16,
    borderRadius: 16,
    flexDirection: "row",
    height: 72,
    alignItems: "center",
    marginBottom: 12,
  },
  itemsLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },

  circle: {
    paddingLeft: 16,
    width: 24,
    height: 24,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#98A2B3",
    borderRadius: 70,
    marginHorizontal: -16,
  },
  completedCircle: {
    paddingLeft: 16,
    width: 24,
    height: 24,
    backgroundColor: "#7F56D9",
    borderRadius: 70,
  },
  tick: {
    width: 20,
    height: 20,
    marginHorizontal: -15,
    marginVertical: 2,

  },
  itemText: {
    maxWidth: screenWidth - 80,
    paddingLeft: 16,
    fontWeight: "500",
    fontSize: 16,
  },
});
export default Task;
