import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../constants/colors";

const PrimaryButton = ({ children, onPress }) => {
  const pressHandler = () => {
    console.log("pressed!");
  };
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.pressContainer, styles.pressed]
            : styles.pressContainer
        }
        onPress={onPress}
        android_ripple={{ color: Colors.rippleColor }}
      >
        <Text style={styles.textChild}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 28,
    overflow: "hidden",
    margin: 8,
  },
  pressContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: Colors.accentColor,
    elevation: 4,
  },
  textChild: {
    color: Colors.primaryColor,
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});

export default PrimaryButton;
