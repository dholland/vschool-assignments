import React from 'react';
import ThemeButtons from './ThemeButtons';

function header(props) {
	return (
		<header>
			<h1>{props.title}</h1>
			<p>{props.appDescription}</p>
			<ThemeButtons />
		</header>
	);
}

export default header;
