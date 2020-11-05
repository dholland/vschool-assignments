import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Square from './components/Square';

export default class App extends Component {
	state = {
		colors: [
			'white',
			'white',
			'white',
			'white',
			'black',
			'black',
			'black',
			'black',
		],
	};

	toggleColor = () => {
		this.setState((prevState) => {
			console.log(prevState);
			let newState = prevState.colors.map((color) => {
				return color === 'white' ? 'black' : 'white';
			});
			return { colors: newState };
		});
		console.log('toggle ended');
	};

	purple = () => {
		this.setState((prevState) => {
			let newState = prevState.colors.map((color, idx) => {
				if (idx < 4) {
					return 'purple';
				} else if (color === 'purple') {
					return 'white';
				} else {
					return color;
				}
			});
			console.log(newState);
			return { colors: newState };
		});
	};
	reset = () => {
		this.setState({
			colors: [
				'white',
				'white',
				'white',
				'white',
				'black',
				'black',
				'black',
				'black',
			],
		});
	};

	render() {
		const squares = this.state.colors.map((color, idx) => {
			return <Square key={idx} color={color} />;
		});
		// console.log('State is:', this.state.state);

		return (
			<div className='container columns'>
				<div className='controls'>
					<button onClick={this.toggleColor}>Toggle Color</button>
					<button onClick={this.purple}>Purple Color</button>
					<button onClick={this.reset}>Reset</button>
				</div>

				<div className='pad'>{squares}</div>
			</div>
		);
	}
}
