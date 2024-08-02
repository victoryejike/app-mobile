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
import { useContext, useLayoutEffect, useState } from "react";
import IconButton from "../components/IconButton";
import { FavouriteContext } from "../store/context/favourite-context";

const MealsDetailsScreen = ({ route, navigation }) => {
  const mealId = route.params.mealItem.id;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  const [color, setColor] = useState("#e4baa1");
  const favouriteMealsConext = useContext(FavouriteContext);
  const isMealsFavourite = favouriteMealsConext.ids.includes(mealId);

  const headerButtonPressedHandler = () => {
    if (isMealsFavourite) {
      favouriteMealsConext.removeFavourite(mealId);
    } else {
      favouriteMealsConext.addFavourite(mealId);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            onPress={headerButtonPressedHandler}
            icon={isMealsFavourite ? "star" : "star-outline"}
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
