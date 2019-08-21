import React from 'react'
import TodoItem from './TodoItem'
import todosData from '../data/todosData'

class MainContent extends React.Component {
	constructor() {
		super()
		this.state = {
			todos : todosData
		}
	}

	render() {
		const todoItems = this.state.todos.map(function (task) {
			return (
				<TodoItem key={task.id} item={task} />
			)
		})

		return (
			<div className='todo-list'>
				{todoItems}
			</div>
		)
	}
		
}

export default MainContent