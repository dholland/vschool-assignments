import React, { Component } from 'react';
const { Provider, Consumer } = React.createContext();

class ThemeContextProvider extends Component {
	state = {
		theme: 'purple',
	};

	changeTheme = (themeColor) => {
		console.log(themeColor);
		this.setState({ theme: themeColor });
	};

	render() {
		return (
			<Provider
				value={{ theme: this.state.theme, changeTheme: this.changeTheme }}>
				{this.props.children}
			</Provider>
		);
	}
}

export { ThemeContextProvider, Consumer as ThemeContextConsumer };
