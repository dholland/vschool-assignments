import React from 'react';
import Nav from './Nav';
function header(props) {
	console.log('Nav:', props.nav);

	return (
		<header>
			<Nav />
			<h1>{props.title}</h1>
			<p>{props.appDescription}</p>
		</header>
	);
}

export default header;
