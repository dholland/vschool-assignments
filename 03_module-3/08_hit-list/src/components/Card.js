import React from 'react';
import './card.css';

function Card(props) {
	const { image, name } = props;
	return (
		<div className='card'>
			<img src={image} alt={name} />
			<h3>{name}</h3>
		</div>
	);
}

export default Card;
