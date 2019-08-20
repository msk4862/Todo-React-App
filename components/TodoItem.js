import React from 'react'

class TodoItem extends React.Component {
	render() {

		return (
			<div className='todo-item'>
				<input type='checkbox' name='task1'/>
				<p>Task 1</p>
			</div>
		)
	}
}

export default TodoItem