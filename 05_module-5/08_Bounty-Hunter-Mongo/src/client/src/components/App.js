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
			<div>
				{bounties &&
					bounties.map((bounty) => (
						<ul>
							<li>{bounty.name}</li>
							<li>{bounty.status}</li>
							<li>{bounty._id}</li>
							<button onClick={() => console.log('click')}>Delete</button>
						</ul>
					))}
			</div>
		</div>
	);
};

export default App;
