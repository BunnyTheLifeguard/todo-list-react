import React, { useState, useEffect } from 'react';
import List from './components/List';

let iList = [
	{
		task: 'Buy water',
		date: 'Fri Mar 27 2020',
		priority: 'High'
	},
	{
		task: 'Buy food',
		date: 'Fri Mar 27 2020',
		priority: 'Low'
	},
	{
		task: 'Feed cat',
		date: 'Sat Mar 28 2020',
		priority: 'High'
	}
];

const App = () => {
	const [list, setList] = useState(iList);
	const [todoTitle, setTodoTitle] = useState('');

	useEffect(() => setList(list), []);

	const setTitle = (event) => {
		setTodoTitle(event.target.value);
	};

	const addTodo = (event) => {
		event.preventDefault();
		const newTodo = {
			task: todoTitle,
			date: new Date().toDateString(),
			priority: 'Low'
		};
		setList(list.concat(newTodo));
		setTodoTitle('');
	};

	return (
		<div>
			<List
				list={list}
				addTodo={addTodo}
				todoTitle={todoTitle}
				setTitle={setTitle}
			/>
		</div>
	);
};

export default App;