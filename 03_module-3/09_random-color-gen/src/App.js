import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import Header from './components/Header';

export default class App extends Component {
	state = {
		color: '',
		hexColor: () => {
			return `#${this.state.color}`;
		},
	};

	getColor = () => {
		axios
			.get(
				`http://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`
			)
			.then((response) => {
				this.setState({
					color: response.data.new_color,
				});
			});
	};

	componentDidMount() {
		this.getColor();
	}

	render() {
		console.log('hex', this.state.hexColor());
		const styles = {
			backgroundColor: this.state.hexColor(),
		};
		return (
			<div className='container '>
				<div style={styles} className='content'>
					<Header
						title='Color Hex'
						appDescription='https://coursework.vschool.io/random-color-component/'
					/>
					<div>
						<button style={{ cursor: 'pointer' }} onClick={this.getColor}>
							Change Color
						</button>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
							facilis autem doloremque! Voluptate eligendi commodi eum totam
							cupiditate placeat, vitae fuga, excepturi rem maxime expedita
							nihil optio temporibus cum quam.
						</p>
					</div>
				</div>
				<footer>Date: </footer>
			</div>
		);
	}
}
