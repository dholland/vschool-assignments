import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

function App() {
	return (
		<div className='container mx-auto bg-white'>
			<div className='flex flex-col'>
				<Header
					title='API Capstone Project'
					appDescription='Stacauto Vehicle Search API'
				/>
				<Router>
					<Main />
				</Router>
				<Footer date='12/19/20' />
			</div>
		</div>
	);
}

export default App;

<div className='container '>
	<div className='content'></div>
</div>;
