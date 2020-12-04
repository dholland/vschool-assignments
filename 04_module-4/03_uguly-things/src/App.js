import React from 'react';
import './App.css';

import Header from './components/Header';
import Form from './components/Form';
import ImageList from './components/ImageList';

function App() {
	return (
		<div className='container '>
			<div className='content'>
				<Header
					title='Uguly Thing!'
					appDescription='Make something really cool'
				/>
				<Form />
				<ImageList />
				<footer>Date: </footer>
			</div>
		</div>
	);
}

export default App;
