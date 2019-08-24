import React from 'react'

class TodoItem extends React.Component {
	
	render() {

		return (
			<div className='todo-item'>
				<input type='checkbox'
				checked = {this.props.item.completed}
				onChange={(event) => this.props.handleChange(this.props.item.id)}/>
				<p>{this.props.item.text}</p>
			</div>
		)
	}
}

export default TodoItem