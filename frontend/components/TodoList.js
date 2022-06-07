import React from 'react';
import Todo from "./Todo";

export default class TodoList extends React.Component {
  render() {
    // console.log(this.props.todos);
    return (
      <div id="todos">
        <h2>Todos</h2>
        {this.props.todos.map(todo => {
          if(this.props.hide){
            if(!todo.completed){
              return <Todo key={todo.id} todo={todo} completed={this.props.completed}/>
            }
          } else {
            return <Todo key={todo.id} todo={todo} completed={this.props.completed}/>
          }
        })}
      </div>
    )
  }
}


