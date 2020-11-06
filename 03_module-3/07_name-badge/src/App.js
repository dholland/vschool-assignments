import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import SignUp from './components/Signup';
import Badges from './components/Badges';

export class App extends Component {
	state = {
		formData: {},
		badges: [],
	};

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState((prevState) => {
			return {
				formData: {
					...prevState.formData,
					[name]: value,
				},
			};
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.setState((prevState) => {
			return {
				badges: [
					...prevState.badges,
					{
						id: 1,
						data: this.state.formData,
					},
				],
			};
		});
		this.setState({ formData: {} });
		e.target.reset();
	};

	render() {
		return (
			<div className='container '>
				<div className='content'>
					<Header
						title='Name Badge Project'
						appDescription='https://coursework.vschool.io/name-badge/'
					/>
					<SignUp
						handleChange={this.handleChange}
						handleSubmit={this.handleSubmit}
					/>
					<Badges badges={this.state.badges} />
				</div>
				<footer>Date: 11/05/20</footer>
			</div>
		);
	}
}

export default App;
