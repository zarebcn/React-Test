import React, { Component } from 'react';

class Form extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  render() {
    return (
      <div>
        <span>{this.props.title}</span>
        &nbsp;
        <span>{this.state.count}</span>
        &nbsp;
        <button onClick={() => this.buttonPressed()}>{this.props.button}</button>
      </div>
    );
  }

  buttonPressed() {
    this.setState({ count: this.state.count + 1 })
    this.props.onPressed();
  }
}

export default Form;
