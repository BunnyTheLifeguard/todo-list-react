import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

const formStyle = { margin: '10px 0px', display: 'inline-block' };
const listStyle = { margin: '20px 0px' };

const List = ({
	list,
	addTodo,
	setTitle,
	todoTitle,
	priority,
	selectPrio,
	selectDate
}) => {
	const renderedList = list.map((item) => (
		<li key={item.task} style={listStyle}>
			Task: {item.task} <br /> Due: {item.date} <br /> Prio: {item.priority}
		</li>
	));

	return (
		<>
			<h1>React ToDo List</h1>
			<h3>(Frontend only - No database)</h3>
			<ul>
				<form onSubmit={addTodo}>
					<label style={formStyle}>
						New ToDo:
						<br />
						<input type="text" value={todoTitle} onChange={setTitle} />
					</label>
					<br />
					<label style={formStyle}>
						Due date:
						<br />
						<DayPickerInput onDayChange={selectDate} />
					</label>
					<br />
					<label style={formStyle}>
						Priority:
						<br />
						<label>
							High
							<input
								type="radio"
								name="priority"
								value="High"
								checked={priority === 'High'}
								onChange={selectPrio}
							/>
						</label>
						<label>
							Low
							<input
								type="radio"
								name="priority"
								value="Low"
								checked={priority === 'Low'}
								onChange={selectPrio}
							/>
						</label>
					</label>
					<br />
					<input type="submit" value="Add" style={formStyle} />
				</form>
				{renderedList}
			</ul>
		</>
	);
};

export default List;
