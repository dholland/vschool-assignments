import React from 'react';
import Pet from './Pet';

function Friend(props) {
	const pets = props.pets.map((pet) => {
		return <Pet name={pet.name} breed={pet.breed} />;
	});
	return (
		<div>
			<h2>Name: {props.name}</h2>
			<h3>Age: {props.age}</h3>
			<h4>Pets:</h4>
			{pets}
		</div>
	);
}
export default Friend;
