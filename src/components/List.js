import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

const listStyle = { margin: '20px 0px' };

const List = ({
	list,
	addTodo,
	setTitle,
	todoTitle,
	priority,
	selectPrio,
	selectDate,
}) => {
	const renderedList = list.map((item) =>
		item.priority === 'High' ? (
			<li key={item.task} style={listStyle}>
				Task: {item.task} <br /> Due: {item.date}{' '}
				<div className="prioHigh">Prio: {item.priority}</div>
			</li>
		) : (
			<li key={item.task} style={listStyle}>
				Task: {item.task} <br /> Due: {item.date}{' '}
				<div className="prioLow">Prio: {item.priority}</div>
			</li>
		)
	);

	return (
		<>
			<h1>React ToDo List</h1>
			<h3>(Frontend only - No database)</h3>
			<br />
			<ul>
				<form onSubmit={addTodo}>
					<label className="description">
						New ToDo:
						<br />
						<input
							className="inputField"
							type="text"
							value={todoTitle}
							onChange={setTitle}
						/>
					</label>
					<br />
					<label className="field">
						Due date:
						<br />
						<br />
						<DayPickerInput onDayChange={selectDate} />
					</label>
					<br />
					<label className="field">
						<div className="prio">Priority:</div>
						<br />
						<label className="radioContainer">
							High
							<input
								className="radio"
								type="radio"
								name="priority"
								value="High"
								checked={priority === 'High'}
								onChange={selectPrio}
							/>
							<span className="radioCheck"></span>
						</label>
						<label className="radioContainer">
							Low
							<input
								className="radio"
								type="radio"
								name="priority"
								value="Low"
								checked={priority === 'Low'}
								onChange={selectPrio}
							/>
							<span className="radioCheck"></span>
						</label>
					</label>
					<br />
					<button type="submit" value="Add">
						Add ToDo
					</button>
				</form>
				{renderedList}
			</ul>
		</>
	);
};

export default List;
