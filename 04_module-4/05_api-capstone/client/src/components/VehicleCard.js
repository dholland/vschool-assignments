import React from 'react';
import { useHistory } from 'react-router-dom';

export default function VehicleCard({ vehicle, removeFavorite }) {
	const { VIN, Make, Model, Series, mainPhoto, Year } = vehicle;
	const history = useHistory();

	const goToDetailsPage = () => history.push(`/details/?VIN=${VIN}`)

	return (
		<div className='flex flex-col p-2 m-4 w-1/4 shadow-lg'>
			<div className=''>
				<img className='w-full h-full' src={mainPhoto} alt={Make} />
			</div>
			<hr />
			<h1 className='text-lg font-semibold mt-2'>{`${Make} ${Model}`}</h1>
			<h2 className='text-sm'>Series: {Series}</h2>
			<h2 className='text-sm'>Year: {Year}</h2>
			<h2 className='text-sm'>VIN: {VIN}</h2>
			
				<button onClick={() => goToDetailsPage()} className='mt-3 hover:bg-blue-700 hover:text-gray-50'>
				Details
				</button>
			{removeFavorite && <button onClick={() => removeFavorite(VIN)} className='mt-3 hover:bg-red-600 hover:text-gray-50'>
				Remove
				</button>}
			
		</div>
	);
}
