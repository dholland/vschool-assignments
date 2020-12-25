import Axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import { useParams, useLocation, useRouteMatch } from 'react-router-dom';
import VehicleCard from './VehicleCard';
import Find from './Find'
const Collection = (props) => {
	let { search } = useLocation();
	const query = new URLSearchParams(search);
	const make = query.get('make');
	const model = query.get('model');
	const [collection, setCollection] = useState();

	useEffect(() => {
		Axios.get(`http://localhost:5000/collection/${make}/${model}`)
			.then(function (response) {
				console.log(response.data);
				setCollection(response.data);
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			});
	}, [query]);

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
