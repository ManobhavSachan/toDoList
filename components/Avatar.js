import React from "react";
import { StyleSheet, View, Image } from "react-native";
const Avatar = () => {
  const avatar = require("./../images/Avatar.jpg");
  const avatar1 = require("./../images/Avatar1.jpg");
  const avatar2 = require("./../images/Avatar2.jpg");
  const avatar3 = require("./../images/Avatar3.jpg");
  return (
    <View style={styles.layout}>
      <Image source={avatar} style={styles.avatar} />
      <Image source={avatar1} style={styles.avatar} />
      <Image source={avatar2} style={styles.avatar} />
      <Image source={avatar3} style={styles.avatar} />
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    flexDirection: "row",
    display: "flex",
    paddingTop: 15,
  },
  avatar: {
    width: 24,
    height: 24,
    borderColor: "#FFFFFF",
    borderRadius: 200,
    margin: -4,
  },
});
export default Avatar;
