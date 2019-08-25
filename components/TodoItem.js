import React from 'react'

class TodoItem extends React.Component {
	
	render() {
		const taskTextStyle = {
			textDecoration: 'line-through',
			color: '#cdcdcd',
			fontStyle: 'italic'
		}
		return (
			<div className='todo-item'>
				<input type='checkbox'
				checked = {this.props.item.completed}
				onChange={(event) => this.props.handleChange(this.props.item.id)}/>
				<p style={this.props.item.completed ? taskTextStyle : null}>{this.props.item.text}</p>
			</div>
		)
	}
}

export default TodoItem