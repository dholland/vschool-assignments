import React from 'react';

export default function UglyImage(props) {
	return (
		<div className='image-card'>
			<h1>{props.title}</h1>
			<div className='image-card-image-wrapper'>
				<div className='image-responsive'>
					<img
						sizes={'(min-width: 100px) 80vw, 100vw'}
						src={props.imgURL}
						alt={props.description}
					/>
				</div>
			</div>
			<div>
				<p>{props.description}</p>
				<button onClick={props.handleDelete}>Delete</button>
			</div>
		</div>
	);
}
