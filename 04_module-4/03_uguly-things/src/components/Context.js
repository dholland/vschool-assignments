import React, { Component } from 'react';
const UglyThingsContext = React.createContext();

class UglyContextProvider extends Component {
	state = {
		isLoading: false,
		newImage: {
			title: '',
			description: '',
			imgUrl: '',
		},
		uglyImages: [],
	};

	loadImages = () => {
		var myHeaders = new Headers();
		myHeaders.append('Content-Type', 'application/json');

		let requestOptions = {
			method: 'GET',
			headers: myHeaders,
		};

		fetch('https://api.vschool.io/danny/thing', requestOptions)
			.then((response) => response.text())
			.then((result) => {
				this.setState((prevState) => {
					return {
						uglyImages: [...JSON.parse(result)],
					};
				});
			})
			.catch((error) => console.log('error', error));
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

		var myHeaders = new Headers();
		myHeaders.append('Content-Type', 'application/json');

		let requestOptions = {
			method: 'POST',
			headers: myHeaders,
			body: JSON.stringify({ ...this.state.newImage }),
			redirect: 'follow',
		};

		fetch('https://api.vschool.io/danny/thing', requestOptions)
			.then((response) => response.text())
			.then((result) => this.loadImages())
			.catch((error) => console.log('error', error));

		this.setState({
			newImage: { title: '', description: '', imgUrl: '' },
		});
	};

	handleDelete = (id) => {
		console.log(id);
		var myHeaders = new Headers();
		myHeaders.append('Content-Type', 'application/json');
		var requestOptions = {
			method: 'DELETE',
			headers: myHeaders,
			redirect: 'follow',
		};

		fetch('https://api.vschool.io/danny/thing/' + id, requestOptions)
			.then((response) => response.text())
			.then((result) => this.loadImages())
			.catch((error) => console.log('error', error));
	};

	handleEdit = (id) => {
		let editImage = this.state.uglyImages.find((item) => (item.id = id));
		console.log(editImage);
	};

	render() {
		return (
			<UglyThingsContext.Provider
				value={{
					uglyImages: this.state.uglyImages,
					newImage: this.state.newImage,
					handleChange: this.handleChange,
					handleSubmit: this.handleSubmit,
					handleDelete: this.handleDelete,
					handleEdit: this.handleEdit,
					loadImages: this.loadImages,
				}}>
				{this.props.children}
			</UglyThingsContext.Provider>
		);
	}
}
export { UglyContextProvider, UglyThingsContext };
