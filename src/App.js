import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Add a to-do',
      act: 0,
      index: '',
      name: '',
      email: '',
      todo: '',
      datas: [],
    }
  }

  addTodo = (e) => {
    e.preventDefault();
    let datas = [...this.state.datas];
    this.setState({ name: e.target.name.value, email: e.target.email.value, todo: e.target.todo.value })

    if (this.state.act === 0) {
      datas = datas.concat({
        name: e.target.name.value,
        email: e.target.email.value,
        todo: e.target.todo.value
      });
      this.setState({ name: '', email: '', todo: '' })
    } else {
      let index = this.state.index;
      datas[index].name = this.state.name;
      datas[index].email = this.state.email;
      datas[index].todo = this.state.todo;
    }
    this.setState({ datas, act: 0 });
  }

  deleteTodo = (i) => {
    let datas = this.state.datas;
    datas.splice(i, 1);
    this.setState({ datas });
    this.setState({ name: '', email: '', todo: '' })
  }

  editTodo = (i) => {
    let data = this.state.datas[i];
    console.log(data);
    this.setState({ name: data.name, email: data.email, todo: data.todo });
    this.setState({ act: 1, index: i });
  }

  nameChangeHandler = (event) => {
    this.setState({ name: event.target.value });
  }

  emailChangeHandler = (event) => {
    this.setState({ email: event.target.value });
  }

  todoChangeHandler = (event) => {
    this.setState({ todo: event.target.value });
  }


  render() {
    return (
      <div className="App">
        <h2>{this.state.title}</h2>
        <form className="myForm" onSubmit={this.addTodo}>
          <div className="align">
            <label className="label" htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={this.state.name} placeholder="Name" className="formField"
              onChange={this.nameChangeHandler} />
          </div>

          <div className="align">
            <label className="label" htmlFor="email">Email:</label>
            <input type="text" id="email" name="email" value={this.state.email} placeholder="Email" className="formField"
              onChange={this.emailChangeHandler} />
          </div>

          <div className="align">
            <label className="label" htmlFor="todo">Todo:</label>
            <input type="text" id="todo" name="todo" value={this.state.todo} placeholder="Todo description" className="formField"
              onChange={this.todoChangeHandler} />
          </div>
          <div className="btn-submit">
            <input type="submit" className="myButton" value="submit" />
          </div>
        </form>

        <div className="list-div">
          {
            this.state.datas.map((data, i) =>
              <li key={i} className="myList">
                Name: {data.name}<br></br>Email: {data.email}<br></br>To-do: {data.todo}<br></br>
                <button onClick={(e) => this.deleteTodo(i)} className="myListButton">remove </button>
                <button onClick={(e) => this.editTodo(i)} className="myListButton">edit </button>
              </li>
            )
          }
        </div>

      </div>
    );
  }
}

export default App;
