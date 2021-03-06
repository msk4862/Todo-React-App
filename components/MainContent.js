import React from 'react'
import TodoItem from './TodoItem'
import todosData from '../data/todosData'

class MainContent extends React.Component {
	constructor() {
		super()
		this.state = {
			todos : todosData
		}

		//IMPORTANT (handleChange is invoking setState)
		this.handleChange = this.handleChange.bind(this)

	}

	handleChange(id) {
		this.setState(prevState => {
			const updatedTodos = this.state.todos.map(todo => {
				if(todo.id == id)
					todo.completed = !todo.completed
				return todo
			})
			return {
				todos : updatedTodos
			}
		})
	}

	render() {

        const todoItems = this.state.todos.map(item => 
			<TodoItem key={item.id} item={item} handleChange={this.handleChange}/>
		)

		return (
			<div>
				<div className='todo-list'>
					{todoItems}
				</div>
			</div>

		)
	}
		
}

export default MainContent