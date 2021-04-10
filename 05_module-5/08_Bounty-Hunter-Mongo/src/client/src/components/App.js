import { useState, useEffect } from 'react';

const App = () => {
	const [bounties, setBounties] = useState();
	const [isLoading, setIsLoading] = useState(false);

	const fetchData = async () => {
		const res = await fetch('/bounties');
		const data = await res.json();
		setBounties(data.bounties);
	};

	useEffect(() => {
		fetchData();
	}, []);

	const handleDelete = async (id) => {
		if (isLoading) {
			return;
		}
		setIsLoading(true);
		const res = await fetch(`/bounties/${id}`, { method: 'Delete' });
		const status = await res.text();
		console.log('Status', status);
		fetchData();
		setIsLoading(false);
	};
	return (
		<div className='App'>
			<div>
				{bounties &&
					bounties.map((bounty) => (
						<ul key={bounty._id}>
							<li>{bounty.name}</li>
							<li>{bounty.status}</li>
							<li>{bounty._id}</li>
							<button onClick={() => handleDelete(bounty._id)}>Delete</button>
						</ul>
					))}
			</div>
		</div>
	);
};

export default App;
