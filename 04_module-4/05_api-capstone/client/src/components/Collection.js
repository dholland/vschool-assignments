import Axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import VehicleCard from './VehicleCard';
import Find from './Find'

const Collection = (props) => {
	let { search } = useLocation();
	const query = new URLSearchParams(search);
	const make = query.get('make');
	const model = query.get('model');
	const [collection, setCollection] = useState();

	useEffect(() => {
		Axios.get(`https://data-tram.herokuapp.com/collection/${make}/${model}`)
			.then(function (response) {
				console.log(response.data);
				setCollection(response.data);
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			});
	}, [make, model]);

	return (
		<>
		<Find />
		<div className='flex flex-row flex-wrap justify-center'>
			{collection && collection.map((car) => <VehicleCard vehicle={car} />)}
		</div>
	</>
	)
}

export default Collection;
