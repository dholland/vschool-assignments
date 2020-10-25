import React from 'react';
import vacationSpots from '../data/vacationSpots';
import './Location.css';

function Locations() {
	const cards = vacationSpots.map((location, index) => {
		return (
			<div key={index + location} className='card'>
				<img src={location.img} alt={location.place} />
				<h3>{location.place}</h3>
				<p>${location.price}</p>
				<p>
					Best Time to visit: <strong>{location.timeToGo}</strong>
				</p>
			</div>
		);
	});
	return <div className='flex'>{cards}</div>;
}

export default Locations;
