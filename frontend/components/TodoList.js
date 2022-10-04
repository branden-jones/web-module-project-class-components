import React from 'react'
import Todo from './Todo';

class TodoList extends React.Component {

  render() {
    return (
      <ul>
        {this.props.todos.map(todo => {
          return (
          <Todo  key={todo.id} toggle={this.props.toggle} todo={todo} />
          )}
        )}
      </ul>
    )
  }
}
export default  TodoList;