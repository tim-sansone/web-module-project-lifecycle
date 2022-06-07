import React from 'react';
import axios from "axios";
import { nanoid } from "nanoid"
import TodoList from "./TodoList";
import Form from "./Form";


const URL = 'http://localhost:9000/api/todos'

export default class App extends React.Component {
  
  state = {
    todos: [],
    hide: false,
    error: ""
  }

  componentDidMount(){
    axios.get(URL)
      .then(res => {
        this.setState({
          todos: res.data.data
        })
      })
      .catch(err => console.log(err))
  }

  submitNew = (name) => {
    const newTodo = {
      id: nanoid(),
      name,
      completed: false
    }
    axios.post(URL, newTodo)
      .then(res => {
        this.setState({
          todos: [...this.state.todos, res.data.data],
          error: ""
        })
      })
      .catch(err => console.log(err))
  }
  
  completed = (id) => {
    axios.patch(`${URL}/${id}`)
      .then(res => {
        this.setState({
          todos: this.state.todos.map(todo => {
            if(todo.id === id){
              return res.data.data
            }
            return todo
          })
        })
      })
      .catch(err => console.log(err))
  }

  hide = () => {
    this.setState({
      hide: !this.state.hide
    })
  }

  error = str => {
    this.setState({
      error: str
    })
  }

  render() {
    return (
      <div>
        { this.state.error && <p id="error">{this.state.error}</p> }
        <TodoList todos={this.state.todos} completed={this.completed} hide={this.state.hide}/>
        <Form submitNew={this.submitNew} error={this.error}/>
        <button onClick={this.hide}>{ this.state.hide ? "Show Completed" : "Hide Completed" }</button>
      </div>
    )
  }
}

// , { completed: !completed }