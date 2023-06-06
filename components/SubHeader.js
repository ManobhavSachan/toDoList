import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, Platform } from "react-native";
import { useDispatch } from "react-redux";
import { deleteToDo } from "./../redux/reducers";
import { Alert } from "react-native";

const SubHeader = () => {
  const deleteImage = require("./../images/Icon.png");
  const dispatch = useDispatch();
  const handleClick = () => {
    Alert.alert(
      'Confirmation',
      'Are you sure you want to delete all Tasks?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
          onPress: () => {
            return;
          },
        },
        {
          text: 'OK',
          onPress: () => {
            dispatch(deleteToDo());
          },
        },
      ],
      { cancelable: false }
    );
    if(Platform.OS === "web" ){
      const result = window.confirm('Are you sure you want to delete all Tasks?',);
      if (result) {
        dispatch(deleteToDo());
      } else {
        return;
      }
    }
  };
  return (
    <View style={styles.title}>
      <Text style={styles.listTitle}>Task List</Text>
      <TouchableOpacity onPress={handleClick}>
        <Image source={deleteImage} style={styles.delImage} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  listTitle: {
    
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 20,
    color: "#5D6B98",
  },
  delImage: {
    width: 15,
    height: 20,
  },
  title: {
    flexDirection: "row",
    paddingTop: 28,
    justifyContent: "space-between",
  },
  items: {
    paddingTop: 16,
  },
});
export default SubHeader;
