import React from 'react'

export default class Form extends React.Component {
  
  state = {
    textInput: ""
  }

  handleChange = evt => {
    this.setState({
      textInput: evt.target.value
    })
  }

  handleSubmit = evt => {
    evt.preventDefault();
    this.state.textInput ? this.props.submitNew(this.state.textInput) : this.props.error("Please Enter A Todo")
    this.setState({
      textInput: ""
    })
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.textInput} onChange={this.handleChange}/>
        <button>Submit</button>
      </form>
    )
  }
}
