import React from 'react';

function Pet(props) {
	// console.log(props);

	return (
		<ul>
			<li>Name: {props.name}</li>
			<li>Breed: {props.breed}</li>
		</ul>
	);
}
export default Pet;

// import React from 'react';

// function Pet(props) {
// 	console.log(props.friend.pets);
// 	const manypets = props.friend.pets.map((pet) => {
// 		return (
// 			<>
// 				<p>Name: {pet.name}</p>
// 				<p>Breed: {pet.breed}</p>
// 			</>
// 		);
// 	});
// 	console.log('manyPets', manypets);
// 	return <div>{manypets}</div>;
// }
// export default Pet;
