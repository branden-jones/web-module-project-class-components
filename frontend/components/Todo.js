import React from 'react'

class Todo extends React.Component {

handleComplete = () => {
  this.props.toggle(this.props.todo.id);
}

  render() {
    return (
        <li onClick={this.handleComplete} >
          {this.props.todo.task} {this.props.todo.completed ? <span>Completed</span> : <span></span>} 
        </li>
        )
  }
}

export default Todo;