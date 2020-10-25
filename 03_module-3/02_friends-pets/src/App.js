import React from 'react';
import './App.css';

import FrirendsList from './components/FriendsList';
import Header from './components/Header';
import friends from './data/friends';

function App() {
	return (
		<div className='container '>
			<div className='content'>
				<Header
					title='Friends with Pets'
					appDescription='Use `.map` with different components'
				/>
				<FrirendsList data={friends} />
			</div>
			<footer>Date: 06/15/20</footer>
		</div>
	);
}

export default App;
