import React from 'react'
import TodoList from './TodoList';
import Form from './Form';


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
        task: 'finish mod 2',
        id: 54321,
        completed: false,
      }
    ]
  }
  }
  
addTask = (event, task) => {
  event.preventDefault();
  const newTask = {
    task: task,
    id: Date.now(),
    completed: false,
  }
  this.setState({ ...this.state, todoList: [ ...this.state.todoList, newTask ] })
}

toggleFinished = () => {

}

clearCompleted = () => {

}


  render() {
    const { todos } = this.state;
    return (
      <div>
        <ul>
          {todos.map(todo => {
            return (
            <li>{todo.task} {todo.completed ? <span>Completed</span> : <span></span>} </li>
            )
          })
          }
        </ul>
        <form>
          <button>Add</button>
          <input/>
          <button>Clear</button>
        </form>
      </div>
    )
  }
}

