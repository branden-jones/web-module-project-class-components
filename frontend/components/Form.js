import React from 'react'

export default class Form extends React.Component {
  // constructor(){
  //   super();
  //   this.state = {
  //     task: '',
  //   }
  // }

//   changeHandler = e => {
//     e.preventDefault();
//     this.setState({ ...this.state, task: e.target.value })
//   }
//   submitForm = e => {
//     e.preventDefault();
//     this.props.addTask(e, this.state.task);
//     this.setState({ ...this.state, task: '' })
//   }
  render() {
    return (
      <div>
        <form>

          <input placeholder='Add New Task' type='text' name='task' />
          <button>Add Task</button>
        </form>
      </div>
    )
  }
}
