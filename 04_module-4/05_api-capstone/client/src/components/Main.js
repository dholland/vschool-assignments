import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Find from './Find';
import Collection from './Collection';
import VehicleDetails from './VehicleDetails';
import Favorites from './Favorites'
import {FavoritesContextProvider} from '../context/FavoriteContext'
import Home from './Home';


export default function Main() {
	return (
		<main className="">
			<div  className=''>
				<div className='px-4 py-6 sm:px-0'>
					<Switch>
						<Route exact path='/'>
							<Home />
						</Route>
						<Route path='/collection/'>
							<Collection />
						</Route>
						<FavoritesContextProvider>
							<Route path='/details/*'>
								<VehicleDetails />
							</Route>
							<Route path='/favorites/'>
								<Favorites />
							</Route>
							</FavoritesContextProvider>
					</Switch>
				</div>
			</div>
		</main>
	);
}
