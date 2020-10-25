import React from 'react';

export default function BlogPost(props) {
	return (
		<div className='blog__item'>
			<h2>{props.title}</h2>
			<h3>{props.subTitle}</h3>
			<p>
				Posted by {props.author} on {props.date}
			</p>
		</div>
	);
}
