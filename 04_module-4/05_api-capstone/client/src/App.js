import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

function App() {
	return (
		<div className='container mx-auto bg-white'>
			<div className='grid grid-rows-layout min-h-screen'>
				<Router>
					<Header/>
					<Main />
				</Router>
				<Footer date={new Date()} />
			</div>
		</div>
	);
}

export default App;
