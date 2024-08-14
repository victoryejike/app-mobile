import { View, Text, StyleSheet, Alert } from "react-native";
import React, { useState } from "react";
import Input from "./Input";
import Button from "../UI/Button";
import { getFormattedDate } from "../../utils/date";
import { GlobalStyles } from "../../constants/styles";

const ExpenseForm = ({
  onCancel,
  submitButtonLabel,
  onSubmit,
  defaultValues,
}) => {
  const [input, setInput] = useState({
    amount: {
      value: defaultValues ? defaultValues.amount.toString() : "",
      isValid: true,
    },
    date: {
      value: defaultValues ? getFormattedDate(defaultValues.date) : "",
      isValid: true,
    },
    description: {
      value: defaultValues ? defaultValues.description : "",
      isValid: true,
    },
  });

  const inputChangehandler = (inputIdentifier, enteredValue) => {
    setInput((prevState) => {
      return {
        ...prevState,
        [inputIdentifier]: {
          value: enteredValue,
          isValid: true,
        },
      };
    });
  };

  const submitHandler = () => {
    const expenseData = {
      amount: +input.amount.value,
      date: new Date(input.date.value),
      description: input.description.value,
    };

    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid =
      new Date(expenseData.date).toString() !== "Invalid Date";
    const descriptionIsValid = expenseData.description.trim().length > 0;

    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      setInput((currState) => {
        return {
          amount: { value: currState.amount.value, isValid: amountIsValid },
          date: { value: currState.date.value, isValid: dateIsValid },
          description: {
            value: currState.description.value,
            isValid: descriptionIsValid,
          },
        };
      });
      return;
    }

    onSubmit(expenseData);
  };

  const formIsInvalid =
    !input.amount.isValid || !input.date.isValid || !input.description.isValid;

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense Form</Text>
      <View style={styles.inputRow}>
        <Input
          style={styles.rowInput}
          label="Amount"
          invalid={!input.amount.isValid}
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: (amount) => inputChangehandler("amount", amount),
            value: input.amount.value,
          }}
        />
        <Input
          style={styles.rowInput}
          label="Date"
          invalid={!input.date.isValid}
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: (date) => inputChangehandler("date", date),
            value: input.date.value,
          }}
        />
      </View>

      <Input
        label="Description"
        invalid={!input.description.isValid}
        textInputConfig={{
          placeholder: "Enter description",
          multiline: true,
          onChangeText: (description) =>
            inputChangehandler("description", description),
          value: input.description.value,
        }}
      />
      {formIsInvalid && (
        <Text style={styles.errorText}>
          Invalid inputs - please check your entered data
        </Text>
      )}
      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={onCancel}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={submitHandler}>
          {submitButtonLabel}
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    marginTop: 40,
  },
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginVertical: 24,
    textAlign: "center",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  errorText: {
    textAlign: "center",
    margin: 8,
    color: GlobalStyles.colors.error500,
  },
});

export default ExpenseForm;
