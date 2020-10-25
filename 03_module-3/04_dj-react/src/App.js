import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';

export default class App extends Component {
	state = {
		color: 'white',
	};

	toggleColor = () => {
		let color = this.state.color;
		this.setState(color === 'white' ? { color: 'black' } : { color: 'white' });
	};

	render() {
		return (
			<div className='container virtical--center'>
				<div className='buttons'>
					<button onClick={this.toggleColor}>Button 1</button>
					<button>Button 2</button>
				</div>
				<div className='pad'>
					<div
						className='square'
						style={{ backgroundColor: `${this.state.color}` }}></div>
				</div>
			</div>
		);
	}
}
