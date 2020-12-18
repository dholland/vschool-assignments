import React from 'react';
import './App.css';
import { Link, Switch, Route, useRouteMatch } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Nav from './components/Nav';

function App() {
	return (
		<div className='container '>
			<div className='content'>
				<Header
					title="Danny's App"
					appDescription='Make something really cool'
				/>
				<Nav />
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route path='/about'>
						<About />
					</Route>
					<Route path='/services'>
						<Services />
					</Route>
				</Switch>
			</div>
			<footer>Date: </footer>
		</div>
	);
}

export default App;
