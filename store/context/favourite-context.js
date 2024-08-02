import { createContext, useState } from "react";

export const FavouriteContext = createContext({
  ids: [],
  addFavourite: (id) => {},
  removeFavourite: (id) => {},
});

const FavouriteContextProvider = ({ children }) => {
  const [favouriteMealIds, setFavouriteMealIds] = useState([]);
  const addFavourite = (id) => {
    setFavouriteMealIds((prevState) => [...prevState, id]);
  };

  const removeFavourite = (id) => {
    setFavouriteMealIds((prevState) =>
      prevState.filter((mealId) => mealId !== id)
    );
  };

  const value = {
    ids: favouriteMealIds,
    addFavourite: addFavourite,
    removeFavourite: removeFavourite,
  };

  return (
    <FavouriteContext.Provider value={value}>
      {children}
    </FavouriteContext.Provider>
  );
};

export default FavouriteContextProvider;
