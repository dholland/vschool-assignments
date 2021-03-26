import { useState, useEffect } from 'react';

const App = () => {
	const [bounties, setBounties] = useState();

	const fetchData = async () => {
		const res = await fetch('/bounties');
		const data = await res.json();
		console.log(data);
		setBounties(data);
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className='App'>
			<ul>
				{bounties &&
					bounties.map((bounty) => (
						<li>
							{bounty.name}

							{bounty.status}
						</li>
					))}
			</ul>
		</div>
	);
};

export default App;
