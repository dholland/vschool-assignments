import React from 'react';
import './App.css';

import Header from './components/Header';

function App() {
	return (
		<div className='container '>
			<div className='content'>
				<Header
					title="Danny's App"
					appDescription='Make something really cool'
				/>
				<h2>Let's Get Coding</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam facilis
					autem doloremque! Voluptate eligendi commodi eum totam cupiditate
					placeat, vitae fuga, excepturi rem maxime expedita nihil optio
					temporibus cum quam.
				</p>
			</div>
			<footer>Date: </footer>
		</div>
	);
}

export default App;
