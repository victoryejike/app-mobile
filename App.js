import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals((currentCourseGoals) => [
      ...courseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);

    modalHandler();
  };
  const deleteGoalHandler = (id) => {
    console.log("working..", id);
    setCourseGoals((currentCourseGoals) => {
      const filteredGoals = currentCourseGoals.filter((goal) => goal.id !== id);
      return filteredGoals;
    });
  };
  const modalHandler = () => {
    setModalVisible((prevState) => !prevState);
  };
  // const endAddGoalHandler = () => {
  //   setModalVisible(false);
  // };
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button title="Add New Goal" color="#a065ec" onPress={modalHandler} />
        {modalVisible && (
          <GoalInput
            onAddGoal={addGoalHandler}
            visible={modalVisible}
            onCancelGoalAdd={modalHandler}
          />
        )}
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteGoal={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item) => item.id}
          ></FlatList>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: "#1e085a",
  },
  goalsContainer: {
    flex: 5,
  },
});
