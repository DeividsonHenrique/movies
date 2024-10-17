import { createContext, useContext, useState } from "react";

export const FavoritesContext = createContext();
FavoritesContext.displayName = "MyFavorites";

export default function FavoritesProvider({ children }) {
  const [favorite, setFavorite] = useState([]);

  return (
    <FavoritesContext.Provider value={{ favorite, setFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

//  Hook personalizado

export function useFavoriteContext() {
  const { favorite, setFavorite } = useContext(FavoritesContext);

  function addFavorite(newFavorite) {
    // Verificar se tem item repetido
    const repeatedFavorite = favorite.some(
      (item) => item.id === newFavorite.id
    );

    // nova Lista recebe lista anterior
    let newList = [...favorite];

    //verificar se não tem repetido e adicionar itens na lista de valores

    if (!repeatedFavorite) {
      newList.push(newFavorite);
      return setFavorite(newList);
    }

    // se for repetido ele vai retirar da lista
    newList = favorite.filter((fav) => fav.id !== newFavorite.id);

    return setFavorite(newList);
  }

  return {
    favorite,
    addFavorite,
  };
}
