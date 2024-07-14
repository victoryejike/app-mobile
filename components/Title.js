import { Text, StyleSheet } from "react-native";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    // fontWeight: "bold",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "#000",
    padding: 12,
    color: "#888",
    marginTop: 24,
  },
});

export default Title;
