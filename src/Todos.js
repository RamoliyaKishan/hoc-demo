import React from 'react';
// import React, { useState, useEffect } from 'react';
import FetchWrapper from './FetchWrapper';

const Todos = (props) => {
	// const [todos, setTodos] = useState([]);
	// useEffect(() => {
	// 	const fetchTodos = () => {
	// 		fetch('https://jsonplaceholder.typicode.com/todos')
	// 			.then((response) => response.json())
	// 			.then((json) => setTodos(json));
	// 	};
	// 	fetchTodos();
	// }, []);
	// const todosList = todos.slice(0, 10).map((t) => {
	// 	return (
	// 		<div key={t.id}>
	// 			<h3>{t.title}</h3>
	// 		</div>
	// 	);
	// });
	return (
		<div>
			{/* <h1>i am todo</h1>
			{todosList} */}
			{props.children}
		</div>
	);
};

export default FetchWrapper(Todos, 'todos');
