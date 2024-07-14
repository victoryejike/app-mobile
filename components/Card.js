import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Colors from "../constants/colors";

const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    marginTop: 36,
    padding: 16,
    backgroundColor: Colors.primaryColor,
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.3,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Card;
