import React, { useState, useCallback } from 'react';

function App() {
	const [input, setInput] = useState('');
	const [searchResults, setSearchResults] = useState([]);
	const [selectedCountry, setSelectedCountry] = useState({});

	const handleChange = useCallback((e) => {
		const { value } = e.target;
		setInput(value);
		if (value.length) {
			fetch(`https://restcountries.eu/rest/v2/name/${value}`)
				.then((res) => res.json())
				.then((res) => setSearchResults(res.slice(0, 10)))
				.catch((err) => console.log(err));
		} else {
			setSearchResults([]);
		}
	}, []);

	const handleCountrySelect = useCallback((country) => {
		setSelectedCountry(country);
		setSearchResults([]);
		setInput('');
	}, []);
	return (
		<div>
			<div className='container'>
				<input
					type='text'
					onChange={handleChange}
					value={input}
					placeholder='enter country'
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

export default App;
