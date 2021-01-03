import Axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { favoritesContext } from '../context/FavoriteContext';

export default function VehicleDetails() {
	let { search } = useLocation();
	const query = new URLSearchParams(search);
	const detailsVIN = query.get('VIN');
	const [details, setDetails] = useState({});
	const history = useHistory()
	const {favorites, addFavorite, removeFavorite, favVINS} = useContext(favoritesContext)

	console.log(favVINS)

	useEffect(() => {
		Axios.get(`https://data-tram.herokuapp.com/details/${detailsVIN}`)
			.then(function (response) {
				setDetails(response.data[0]);
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			});
	}, [detailsVIN]);

	const { mainPhoto, Make, Model, Series, VIN, Price, Description, Features, } = details;
	return (
		<div className="flex justify-center">
			<div className="flex flex-col max-w-5xl">
					<button className="mt-3 w-64 pl-3 pr-3 bg-gray-200 rounded-sm hover:bg-blue-700 hover:text-gray-50" onClick={() => history.goBack()}>Back</button>
			<div className="flex flex-row flex-auto">
				<div className="relative flex pt-5">
					<img className="max-h-96" src={mainPhoto} alt={Series} />
				</div>
				<div className="flex flex-col pt-5 ml-10">
					<h1 className="text-3xl">
						{Make} {Model}
					</h1>
					<h2 className="text-xl">{Series}</h2>
					<h2>Price: ${Price}</h2>
					<h2>VIN: {VIN}</h2>
					<button className="mt-3 hover:bg-blue-700 hover:text-gray-50">Book Test Drive</button>
					{favVINS.includes(VIN) ? <button
							className="mt-3 mb-3 text-white bg-red-500 hover:bg-red-900 hover:text-gray-50 focus:border-none"
							onClick={() => {
								removeFavorite(VIN)
							}}
						>Remove</button>: <button
							className="mt-3 mb-3 hover:bg-blue-700 hover:text-gray-50"
							onClick={() => {
								addFavorite(details)
							}}
						>Save To Favorites</button>}
						
				</div>
		</div>
				<section className="w-full justify-center">
					<div className="flex flex-col flex-auto mt-3">
						<h3 className="border-t border-gray-500 text-xl font-semibold mb-1">Description</h3>
						<p className="text-sm mt-1">{Description}</p>
					</div>
				</section>
				<section className="w-full justify-center">
					{/* <h3 className="border-t border-gray-500 text-xl font-semibold mb-1 mt-4">Features</h3> */}
					<details className="border-t border-gray-500 text-xl font-semibold mb-1 mt-4 flex">
						<summary >View Features</summary>
						{Features && Features.map((feature, idx) =>
							<li key={idx} className="text-base font-normal">{feature}</li>)}
					</details>
				</section>
		</div>
		</div>
		
	);
}
