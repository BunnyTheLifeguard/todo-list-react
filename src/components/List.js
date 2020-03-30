import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

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
		<li key={item.task}>
			{item.task} <br /> {item.date} <br /> {item.priority}
		</li>
	));

	return (
		<>
			<ul>
				<form onSubmit={addTodo}>
					<label>
						New ToDo:
						<br />
						<input type="text" value={todoTitle} onChange={setTitle} />
					</label>
					<br />
					<label>
						Due date: <DayPickerInput onDayChange={selectDate} />
					</label>
					<label>
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
					<input type="submit" value="Add" />
				</form>
				{renderedList}
			</ul>
		</>
	);
};

export default List;
