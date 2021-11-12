import React from 'react';
// import React, { useState, useEffect } from 'react';
import FetchWrapper from './FetchWrapper';

const Users = (props) => {
	// const [users, setUsers] = useState([]);
	// useEffect(() => {
	// 	const fetchUser = () => {
	// 		fetch('https://jsonplaceholder.typicode.com/users')
	// 			.then((response) => response.json())
	// 			.then((json) => setUsers(json));
	// 	};
	// 	fetchUser();
	// }, []);
	// const usersList = props.data.map((u) => {
	// 	return (
	// 		<div key={u.id}>
	// 			<h3>{u.name}</h3>
	// 		</div>
	// 	);
	// });
	return (
		<div>
			{/* <h1>i am a user</h1> */}
			{/* {usersList} */}
			{props.children}
		</div>
	);
};

export default FetchWrapper(Users, 'users');
