import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItem = ({ text, onDeleteGoal, id }) => {
  return (
    <View style={styles.goalsItem}>
      <Pressable
        android_ripple={{ color: "#10081d" }}
        onPress={onDeleteGoal.bind(this, id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalsText}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalsItem: {
    fontSize: 18,
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalsText: {
    color: "white",
    padding: 8,
  },
});
