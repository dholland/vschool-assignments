import React, { useContext } from 'react'
import { useLocation, useHistory } from 'react-router-dom';

import { favoritesContext } from '../context/FavoriteContext'
import VehicleCard from './VehicleCard';
import Find from './Find'

const Favorites = (props) => {
  const {favorites, removeFavorite } = useContext(favoritesContext)

  return (
    <section>
      <h2 className="text-2xl border-gray-700 border-b">Favorites</h2>
      {favorites.length === 0 && <div className="flex flex-col w-full">
        <h3 className="p-5 text-center">You Haven't Saved any Favorites</h3>
        <Find />
      </div> }
    <div className="flex flex-wrap">
      {favorites.map(vehicle => <VehicleCard key={vehicle.VIN} removeFavorite={removeFavorite} vehicle={vehicle}/>)}
    </div>
    </section>
  )
}

export default Favorites
