import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Button,
} from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import { useLayoutEffect, useState } from "react";
import IconButton from "../components/IconButton";

const MealsDetailsScreen = ({ route, navigation }) => {
  const mealId = route.params.mealItem.id;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  const [color, setColor] = useState("");

  const headerButtonPressedHandler = () => {
    console.log("pressed!");
    if (color == "") {
      setColor("#e2b497");
    } else setColor("");
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            onPress={headerButtonPressedHandler}
            icon="star"
            color={color}
          />
        );
      },
    });
  }, [navigation, headerButtonPressedHandler]);

  return (
    <ScrollView styl={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listContainer}>
        <Subtitle>Ingredients</Subtitle>
        <List data={selectedMeal.ingredients} />
        <Subtitle>Steps</Subtitle>
        <List data={selectedMeal.steps} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listContainer: {
    width: "80%",
    marginHorizontal: "auto",
  },
});

export default MealsDetailsScreen;
