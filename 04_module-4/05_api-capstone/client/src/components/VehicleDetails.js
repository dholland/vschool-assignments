import React from 'react';
import Axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

export default function VehicleDetails() {
	let { search } = useLocation();
	const query = new URLSearchParams(search);
	const detailsVIN = query.get('VIN');
	const [details, setDetails] = useState({});

	useEffect(() => {
		Axios.get(`http://localhost:5000/details/${detailsVIN}`)
			.then(function (response) {
				console.log(response.data[0]);
				setDetails(response.data[0]);
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			});
	}, []);

	const { mainPhoto, Make, Model, Series, VIN, Price } = details;
	console.log(mainPhoto);
	return (
		<div>
					<button class="m-5" onClick="">Back</button>

			<div>
				<img src={mainPhoto} alt={Series} />
			</div>
			<h1>
				{Make} {Model}
			</h1>
			<h2>{Series}</h2>
			<h2>{Price}</h2>
			<h2>{VIN}</h2>
		</div>
	);
}
