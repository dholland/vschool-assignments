import React, { useState, useEffect } from 'react';
const favoritesContext = React.createContext();

const FavoritesContextProvider = (props) => {
  const [favorites, setFavorites] = useState([])


  useEffect(() => {
    const persistantState = JSON.parse(localStorage.getItem("vehicleFavorites") || [])
    setFavorites(persistantState)
    
  }, [])

  useEffect(() => {
    localStorage.setItem("vehicleFavorites", JSON.stringify(favorites))
  }, [favorites])

  const addFavorite = (vehicleObj) => {
    setFavorites(prevState => {
      return [vehicleObj,...prevState]
    })
  }

  const removeFavorite = (VIN) => {
    setFavorites(prevState => {
      return prevState.filter(item => item.VIN !== VIN)
    })
  }

  const getVINS = () => {
    return favorites.map(vehicle => vehicle.VIN)
  }

  const favVINS = getVINS()

		return (
			<favoritesContext.Provider
				value={{
          favorites: favorites,
          favVINS: favorites.map(vehicle => vehicle.VIN),
          addFavorite: addFavorite,
          removeFavorite: removeFavorite
				}}>
				{props.children}
			</favoritesContext.Provider>
		);
	
}
export { FavoritesContextProvider, favoritesContext };