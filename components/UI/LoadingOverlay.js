import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "../../constants/styles";

const LoadingOverlay = ({ message }) => {
  return (
    <View style={styles.container}>
      <Text>{message}</Text>
      <ActivityIndicator size="large" color="white" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: Colors.primary700,
  },
});

export default LoadingOverlay;
