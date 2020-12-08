import React, { useContext } from 'react';
import { UglyThingsContext } from './Context';

export default function UglyImage(props) {
	const context = useContext(UglyThingsContext);

	// console.log(props);
	return (
		<div className='image-card'>
			<h1>{props.title}</h1>
			<div className='image-card-image-wrapper'>
				<div className='image-responsive'>
					<img
						sizes={'(min-width: 100px) 80vw, 100vw'}
						src={props.imgUrl}
						alt={props.description}
					/>
				</div>
			</div>
			<div>
				<p>{props.description}</p>
				<button onClick={() => context.handleDelete(props.id)}>Delete</button>
				<button onClick={() => context.handleEdit(props.id)}>Edit</button>
			</div>
		</div>
	);
}
