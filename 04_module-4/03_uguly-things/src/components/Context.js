import React, { Component } from 'react';
const { Provider, Consumer } = React.createContext();

class ContextProvider extends Component {
	state = {
		isLoading: false,
		uglyImages: [
			{
				_id: '5faf0ec0ee6f8d3fc3feb354',
				title: 'Title here',
				description: 'Description here',
				imgUrl: 'http://www.example.com/some-link-to-a-cool-photo.jpg',
			},
		],
	};

	loadImages = () => {
		fetch();
	};

	saveImage = (obj) => {};

	render() {
		return (
			<Provider
				value={{
					uglyImages: this.state.uglyImages,
					loadImages: this.loadImages,
					saveImage: this.saveImage,
				}}>
				{this.props.children}
			</Provider>
		);
	}
}
export { ContextProvider, Consumer as ContextConsumer };
