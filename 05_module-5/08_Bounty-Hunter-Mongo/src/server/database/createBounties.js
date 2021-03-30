const axios = require('axios');

module.exports = async (nums = 1) => {
	console.log('Number of Pages:', nums);

	const baseURL = 'https://rickandmortyapi.com/api/character/?page=';

	const pages = [];
	for (let i = 1; i <= nums; i++) {
		pages.push(axios.get(baseURL + [i]));
	}

	const allBounties = await axios
		.all(pages)
		.then(
			axios.spread((...responses) => {
				const people = responses
					.map((page) => page.data.results)
					.flat()
					.map((person) => {
						const {
							name,
							species,
							status,
							gender,
							type,
							image,
							location,
						} = person;
						return {
							name,
							species,
							status,
							gender,
							type,
							image,
							location,
						};
					});
				return people;
			})
		)
		.catch((errors) => {
			console.log('There was an Error');
			console.log(errors);
		});
	// console.log('All Bounties', allBounties[0]);
	return allBounties;
};
