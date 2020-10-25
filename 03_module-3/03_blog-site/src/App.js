import React from 'react';
import './App.css';

import Header from './components/Header';
import Nav from './data/Navigation';

import BlogList from './components/BlogList';
import PostData from './data/PostsData';

function App() {
	return (
		<div className='container '>
			<Header
				title='Clean Blog'
				appDescription='A Blog Theme by Start Bootstrap'
				nav={Nav}
			/>
			<BlogList posts={PostData} />

			<footer>Date: </footer>
		</div>
	);
}

export default App;
