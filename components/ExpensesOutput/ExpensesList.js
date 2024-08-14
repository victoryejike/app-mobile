import { View, Text, FlatList } from "react-native";
import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = ({ expenses }) => {
  const showExpensesList = ({ item }) => {
    return <ExpenseItem {...item} />;
  };

  return (
    <FlatList
      data={expenses}
      renderItem={showExpensesList}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ExpensesList;
