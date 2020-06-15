import React from 'react';

import Friend from './Friend';

function FriendsList(props) {
	const friendsMap = props.data.map((person) => {
		return <Friend name={person.name} age={person.age} pets={person.pets} />;
	});

	return (
		<div>
			<h1>Friend List Component</h1>
			{friendsMap}
		</div>
	);
}
export default FriendsList;
