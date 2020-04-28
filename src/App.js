import React, { useState, useEffect } from 'react';
import './styles/App.css';
import List from './components/List';

const font = { fontFamily: 'Verdana, Arial, Helvetica, sans-serif' };

let iList = [
	{
		task: 'Buy water',
		date: 'Fri Mar 27 2020',
		priority: 'High',
	},
	{
		task: 'Buy food',
		date: 'Fri Mar 27 2020',
		priority: 'Low',
	},
	{
		task: 'Feed cat',
		date: 'Sat Mar 28 2020',
		priority: 'High',
	},
];

const App = () => {
	const [list, setList] = useState(iList);
	const [todoTitle, setTodoTitle] = useState('');
	const [priority, setPriority] = useState('High');
	const [date, setDate] = useState('');

	useEffect(() => setList(list), []);

	const setTitle = (event) => {
		setTodoTitle(event.target.value);
	};

	const selectPrio = (event) => {
		setPriority(event.target.value);
	};

	const selectDate = (event) => {
		setDate(event);
	};

	const addTodo = (event) => {
		event.preventDefault();
		const newTodo = {
			task: todoTitle,
			date: date.toDateString(),
			priority: priority,
		};
		setList(list.concat(newTodo));
		setTodoTitle('');
	};

	return (
		<div className="container">
			<div style={font} className="todo">
				<List
					list={list}
					addTodo={addTodo}
					todoTitle={todoTitle}
					setTitle={setTitle}
					priority={priority}
					selectPrio={selectPrio}
					selectDate={selectDate}
				/>
			</div>
		</div>
	);
};

export default App;
