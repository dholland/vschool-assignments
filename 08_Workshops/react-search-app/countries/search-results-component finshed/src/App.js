import React, { useState, useCallback } from 'react';

export default function App() {
	// const [input, setInput] = useState("");
	// const [searchResults, setSearchResults] = useState([]);
	// const [selectedCountry, setSelectedCountry] = useState({});

	const [allState, setAllState] = useState({
		input: '',
		searchResults: [],
		selectedCountry: {},
	});

	const handleChange = useCallback((e) => {
		const { value } = e.target;
		// setInput(value);
		setAllState((prev) => ({ ...prev, input: value }));
		if (value.length) {
			fetch(`https://restcountries.eu/rest/v2/name/${value}`)
				.then((res) => res.json())
				// .then((res) => setSearchResults(res.slice(0, 10)))
				.then((res) =>
					setAllState((prev) => ({ ...prev, searchResults: res.slice(0, 10) }))
				)
				.catch((err) => console.log(err));
		} else {
			// setSearchResults([]);
			setAllState((prev) => ({ ...prev, searchResults: [] }));
		}
	}, []);

	const handleCountrySelect = useCallback((country) => {
		// setSelectedCountry(country);
		// setSearchResults([]);
		// setInput("");
		setAllState((prev) => ({
			input: '',
			searchResults: [],
			selectedCountry: country,
		}));
	}, []);

	const { input, searchResults, selectedCountry } = allState;

	return (
		<div>
			<div className='container'>
				<input
					type='text'
					onChange={handleChange}
					value={input}
					placeholder='Enter Country Name'
				/>

				<div className='dropdown'>
					{searchResults.map((result) => (
						<button
							className='result'
							key={result.name}
							onClick={() => handleCountrySelect(result)}>
							{result.name}
						</button>
					))}
				</div>
			</div>

			{selectedCountry.name && (
				<div className='selected-country'>
					<h1>{selectedCountry.name}</h1>
					<img
						src={selectedCountry.flag}
						alt={selectedCountry.name + ' flag'}
					/>
					<p>Region: {selectedCountry.region}</p>
					<p>Population: {selectedCountry.population}</p>
				</div>
			)}
		</div>
	);
}
