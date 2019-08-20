import React from 'react'
import TodoItem from './TodoItem'

class MainContent extends React.Component {
	render() {

		return (
			<div className='todo-list'>
				<TodoItem />
				<TodoItem />
				<TodoItem />
			</div>
		)
	}
}

export default MainContent