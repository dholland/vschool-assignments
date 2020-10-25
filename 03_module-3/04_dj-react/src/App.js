import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Square from './components/Square';

export default class App extends Component {
	state = {
		colors: ['white', 'black', 'white', 'black', 'white'],
	};

	toggleColor = () => {
		this.setState((prevState) => {
			let newState = prevState.colors.map((color) => {
				return color === 'white' ? 'black' : 'white';
			});
			return { colors: newState };
		});
	};

	render() {
		const squares = this.state.colors.map((color, idx) => {
			return <Square key={idx} color={color} />;
		});
		return (
			<div className='container'>
				<div className='buttons'>
					<button onClick={this.toggleColor}>Toggle Color</button>
					<button>Button 2</button>
				</div>
				<div className='break'></div>
				<div className='pad'>{squares}</div>
			</div>
		);
	}
}
