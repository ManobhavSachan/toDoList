import React from "react";
import { StyleSheet, Text } from "react-native";
const Header = () => {
  return (
    <>
      <Text style={styles.sectionTitle}>Task Details</Text>
      <Text style={styles.subTitle}>Task Title</Text>
      <Text style={styles.subHeading}>NFT Web App Prototype</Text>
      <Text style={styles.subDescription}>Description</Text>
      <Text style={styles.description}>
        Last year was a fantastic year for NFTs, with the market reaching a $40
        billion valuation for the first time. In addition, more than $10 billion
        worth of NFTs are now sold every week – with NFT..
      </Text>
    </>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    textAlign: "center",
    paddingTop: 72,
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 24,
    color: "#111322",
  },
  subTitle: {
    paddingTop: 36,
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 20,
    color: "#5D6B98",
  },
  subHeading: {
    paddingTop: 12,
    fontWeight: "600",
    fontSize: 20,
    color: "#1D2939",
  },
  subDescription: {
    paddingTop: 15,

    fontWeight: "500",
    fontSize: 14,
    lineHeight: 20,
    color: "#5D6B98",
  },
  description: {
    paddingTop: 12,

    fontWeight: "500",
    fontSize: 14,
    lineHeight: 20,
    color: "#111322",
  },
});
export default Header;
