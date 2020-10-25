import React from 'react';
import './App.css';

import Header from './components/Header';
import Locations from './components/Locations';
function App() {
	return (
		<div className='container '>
			<div className='content'>
				<Header
					title='Vacation Spots'
					appDescription='Use `.map` to make display a list of different vacation spots'
				/>
				<Locations />
			</div>
			<footer>Date: </footer>
		</div>
	);
}

export default App;
