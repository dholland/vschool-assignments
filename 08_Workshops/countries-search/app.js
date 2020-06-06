// fetch(`https://restcountries.eu/rest/v2/name/${value}`)
// 				.then((res) => res.json())
// 				.then((res) => setSearchResults(res.slice(0, 10)))
// 				.catch((err) => console.log(err));

// ify
(function () {
	const userInput = document.getElementById('user-input');
	const dropdown = document.getElementById('dropdown');
	const selectedCountryDiv = document.getElementById('selected-country');
	userInput.addEventListener('input', handleInput);
	window.addEventListener('keydown', handleKeydown);

	function handleInput(event) {
		const { value } = event.target;
		if (value.length) {
			fetch(`https://restcountries.eu/rest/v2/name/${value}`)
				.then((res) => res.json())
				.then((res) => updateDropDown(res.slice(0, 10)))
				.catch((err) => console.log(err));
		} else {
			dropdown.innerHTML = '';
			selectedCountryDiv.innerHTML = '';
		}
	}

	function updateDropDown(arr) {
		dropdown.innerHTML = '';
		//generate new dropdown
		arr.forEach((country) => {
			const btn = document.createElement('button');
			btn.textContent = country.name;
			btn.addEventListener('click', () => handleCountrySelect(country));
			dropdown.appendChild(btn);
		});
	}

	function handleCountrySelect(country) {
		selectedCountryDiv.innerHTML = '';
		dropdown.innerHTML = '';
		userInput.innerHTML = '';

		const name = document.createElement('h1');
		const flag = document.createElement('img');
		const region = document.createElement('p');
		const population = document.createElement('p');

		name.textContent = country.name;
		flag.src = country.flag;
		region.textContent = `Region: ${country.region}`;
		population.textContent = `Population: ${insertCommas(country.population)}`;

		selectedCountryDiv.appendChild(name);
		selectedCountryDiv.appendChild(flag);
		selectedCountryDiv.appendChild(region);
		selectedCountryDiv.appendChild(population);
	}
	let index = -1;
	function handleKeydown(event) {
		if (dropdown.children.length) {
			if (event.which === 40 && index < dropdown.children.length) {
				index++;
				dropdown.children[index - 1]?.classList.toggle('focused');
				dropdown.children[index].classList.toggle('focused');
			} else if (event.which === 38 && index > 0) {
				index--;
				dropdown.children[index + 1]?.classList.toggle('focused');
				dropdown.children[index].classList.toggle('focused');
			}
		}
		if (event.which === 13) {
		}
	}
})();

//name
//flag
//population
//region
