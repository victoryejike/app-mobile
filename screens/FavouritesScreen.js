import { StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealsList from "../components/MealsList";
import { useSelector } from "react-redux";

const FavouritesScreen = () => {
  const favouriteMealsId = useSelector((state) => state.favouriteMeals.ids);
  const favouriteMeals = MEALS.filter((meal) =>
    favouriteMealsId.includes(meal.id)
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
