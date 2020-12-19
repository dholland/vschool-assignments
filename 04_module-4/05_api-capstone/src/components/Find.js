import { useEffect, useState } from 'react';

import './Find.css';

const Find = (props) => {
	const [make, setMakename] = useState();
	const [model, setModelOption] = useState();

	const selectMake = () => {};
	const selectModel = () => {};

	return (
		<div class='dropdown'>
			<button class='dropbtn'>Dropdown</button>
			<div class='dropdown-content'>
				<a href='#'>Link 1</a>
				<a href='#'>Link 2</a>
				<a href='#'>Link 3</a>
			</div>
		</div>
	);
};

export default Find;
