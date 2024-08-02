import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { FavouriteContext } from "../store/context/favourite-context";
import { MEALS } from "../data/dummy-data";
import MealsList from "../components/MealsList";

const FavouritesScreen = () => {
  const favouriteMealsConext = useContext(FavouriteContext);
  const favouriteMeals = MEALS.filter((meal) =>
    favouriteMealsConext.ids.includes(meal.id)
  );

  if (favouriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favourite meals yet.</Text>
      </View>
    );
  }

  return <MealsList items={favouriteMeals} />;
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});

export default FavouritesScreen;
