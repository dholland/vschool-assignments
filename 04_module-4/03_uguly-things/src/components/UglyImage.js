import React from 'react';

export default function UglyImage(props) {
	return (
		<div>
			<h1>{props.title}</h1>
			<img
				style={{ width: '400px' }}
				src={props.imgURL}
				alt={props.description}
			/>
			<p>{props.description}</p>
			<button onClick={props.handleDelete}>Delete</button>
		</div>
	);
}
