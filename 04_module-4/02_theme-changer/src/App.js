import React from 'react';
import './App.css';

import Nav from './components/Nav';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import { ThemeContextConsumer } from './ThemeContext';

function App() {
	return (
		<ThemeContextConsumer>
			{(context) => (
				<div className={`container ${context.theme}`}>
					<div className='content'>
						<Nav />
						<Header
							title='Theme Changer'
							appDescription='https://coursework.vschool.io/context-themes/'
						/>
						<Content />
						<Footer />
					</div>
				</div>
			)}
		</ThemeContextConsumer>
	);
}

export default App;
