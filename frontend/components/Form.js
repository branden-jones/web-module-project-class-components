import React from 'react'

export default class Form extends React.Component {
  constructor(){
    super();
    this.state = {
      input: '',
    }
  }

  changeHandler = e => {
    e.preventDefault();
    this.setState({ 
      ...this.state,
      input: e.target.value })
  }

addTask = (event) => {
  event.preventDefault();
  this.props.handleAdd(this.state.input);
  this.setState({
    ...this.state,
    input: ''
  })
  
}

  render() {
    return (
      <div>
        <form>

          <input placeholder='Add New Task' type='text' name='task' onChange={this.changeHandler}/>
          <button onClick={this.addTask} >Add Task</button>
        </form>
      </div>
    )
  }
}
