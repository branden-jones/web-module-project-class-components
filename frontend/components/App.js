import React from 'react'
import TodoList from './TodoList';
import Form from './Form';
// import Todo from './Todo';



export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todos: [
      {
        task:'GCA Practice',
        id: 12345,
        completed: false,
      },
      {
        task: 'Finish mod 2',
        id: 54321,
        completed: false,
      }
    ]
  }
  }
  
handleAdd = (task) => {

    const newTask = {
    task: task,
    id: Date.now(),
    completed: false,
  }
  this.setState({ 
    ...this.state, 
    todos: [ ...this.state.todos, newTask ] })
  }

toggle = (clickedTask) => {
  this.setState({
    ...this.state,
    todos: this.state.todos.map( todo => {
      if (todo.id === clickedTask) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      return todo;
    })
  })
}
clearCompleted = () => {
  this.setState({
    ...this.state,
    todos: this.state.todos.filter(todo => {
      return (todo.completed === false)
    })
  })
}


  render() {
    const { todos } = this.state;
    return (
      <div>
        <TodoList todos={todos} toggle={this.toggle} />

        <Form todos={todos} handleAdd={this.handleAdd} />

        <button onClick={this.clearCompleted}>Clear</button>
      </div>
    )
  }
}

