import React, { useContext } from 'react'

import { favoritesContext } from '../context/FavoriteContext'
import VehicleCard from './VehicleCard';

const Favorites = (props) => {
  const {favorites, removeFavorite } = useContext(favoritesContext)
  
  return (
    <section>
    <h2 className="text-2xl border-gray-700 border-b">Favorites</h2>
    <div className="flex flex-wrap">
      {favorites.map(vehicle => <VehicleCard key={vehicle.VIN} removeFavorite={removeFavorite} vehicle={vehicle}/>)}
    </div>
    </section>
  )
}

export default Favorites
