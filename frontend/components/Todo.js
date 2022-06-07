import React from 'react'

export default class Todo extends React.Component {
  render() {
    return (

      <div
        className={`todo${ this.props.todo.completed ? " completed" : "" }`}
        onClick={() => this.props.completed(this.props.todo.id)}
      >
        {this.props.todo.name} { this.props.todo.completed && "✓"}
      </div>

    )
  }
}
