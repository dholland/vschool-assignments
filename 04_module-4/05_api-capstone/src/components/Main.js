import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Find from './Find';
import Results from './Results';

export default function Main() {
	return (
		<main>
			<Switch>
				<Route exact path='/'>
					<Find />
				</Route>
				<Route path='/*'>
					<Results />
				</Route>
			</Switch>
		</main>
	);
}
