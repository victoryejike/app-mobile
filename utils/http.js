import axios from "axios";

const baseUrl = "https://react-native-course-a5d24-default-rtdb.firebaseio.com";

export const storeExpense = async (expenseData) => {
  const response = await axios.post(`${baseUrl}/expenses.json`, expenseData);
  return response.data.name;
};

export const fetchExpenses = async () => {
  const response = await axios.get(`${baseUrl}/expenses.json`);

  const expenses = [];

  for (let key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };

    expenses.push(expenseObj);
  }

  return expenses;
};

export const updateExpense = (id, expenseData) => {
  return axios.put(baseUrl + `/expenses/${id}.json`, expenseData);
};

export const deleteExpense = async (id) => {
  return axios.delete(baseUrl + `/expenses/${id}.json`);
};
