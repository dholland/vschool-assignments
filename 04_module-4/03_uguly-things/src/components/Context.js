import React, { Component } from 'react';
const UglyThingsContext = React.createContext();

class UglyContextProvider extends Component {
	state = {
		isLoading: false,
		newImage: {
			title: '',
			description: '',
			imgURL: '',
		},
		uglyImages: [],
	};

	loadImages = () => {
		fetch();
	};

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState((prevState) => {
			return {
				newImage: {
					...prevState.newImage,
					[name]: value,
				},
			};
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.setState((prevState) => {
			return {
				uglyImages: [...prevState.uglyImages, { ...this.state.newImage }],
				newImage: { title: '', description: '', imgURL: '' },
			};
		});
	};

	render() {
		return (
			<UglyThingsContext.Provider
				value={{
					uglyImages: this.state.uglyImages,
					newImage: this.state.newImage,
					handleChange: this.handleChange,
					handleSubmit: this.handleSubmit,
					loadImages: this.loadImages,
				}}>
				{this.props.children}
			</UglyThingsContext.Provider>
		);
	}
}
export { UglyContextProvider, UglyThingsContext };
