import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import PlaceItem from "./PlaceItem";
import { Colors } from "../../constants/colors";

const PlaceList = ({ places }) => {
  if (!places || places.length === 0) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText}>
          No places added yet. Start adding places now.
        </Text>
      </View>
    );
  }

  return (
    <FlatList
      data={places}
      renderItem={({ itemData }) => <PlaceItem place={itemData} />}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  fallbackContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fallbackText: {
    fontSize: 16,
    color: Colors.primary200,
  },
});

export default PlaceList;