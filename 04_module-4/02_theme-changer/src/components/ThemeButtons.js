import React, { Component } from 'react';
import { ThemeContextConsumer } from '../ThemeContext';

export default class ThemeButtons extends Component {
	render() {
		return (
			<ThemeContextConsumer>
				{(context) => (
					<div className='theme-buttons'>
						<span>Choose a Theme</span>
						<button
							onClick={() => {
								context.changeTheme('light');
							}}>
							Light
						</button>
						<button
							onClick={() => {
								context.changeTheme('dark');
							}}>
							Dark
						</button>
						<button
							onClick={() => {
								context.changeTheme('purple');
							}}>
							Purple
						</button>
						<button
							onClick={() => {
								context.changeTheme('red');
							}}>
							Red
						</button>
						<button
							onClick={() => {
								context.changeTheme('blue');
							}}>
							Blue
						</button>
					</div>
				)}
			</ThemeContextConsumer>
		);
	}
}
