import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';

const List = ({ list, addTodo, setTitle, todoTitle }) => {
	const renderedList = list.map((item) => (
		<li key={item.task}>
			{item.task} <br /> {item.date} <br /> {item.importance}
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
						Due date: <DayPickerInput />
					</label>
					<label>
						Priority:
						<br />
						<label>
							High
							<input type="radio" value="high" />
						</label>
						<label>
							Low
							<input type="radio" value="low" />
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
