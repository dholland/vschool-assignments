import React, { Component } from 'react';
import './App.css';
import Card from './components/Card';
import Header from './components/Header';

export default class App extends Component {
	state = {
		hitlist: [],
		isLoading: true,
	};

	componentDidMount() {
		fetch(
			'https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json'
		)
			.then((response) => response.json())
			.then((result) => {
				this.setState({ hitlist: result });
			})
			.catch((error) => console.log('error', error));
	}

	render() {
		// console.log(this.state.hitlist);
		const hitlist = this.state.hitlist;
		let hits = hitlist.map((hit) => {
			return <Card key={hit.name} name={hit.name} image={hit.image} />;
		});
		return (
			<div className='container'>
				<Header
					title='The Hit List'
					appDescription='https://coursework.vschool.io/hit-list/'
				/>

				<div className='content'>{hits}</div>
			</div>
		);
	}
}
