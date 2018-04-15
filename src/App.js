import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Form from './Form';

class App extends Component {

  constructor(props) {

    super(props);
    this.state = {
      count: 0,
      text: "valor inicial"
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          <input value={this.state.text} onChange={(event) => this.setState({text: event.target.value})} />
        </p>
        <p>
          Count: {this.state.count}
        </p>
        <p>
            <Form title="name" button="ok"
              onPressed={() => this.buttonPressed()} />

            <Form title="age" button="enter"
              onPressed={() => this.buttonPressed()} />
        </p>
      </div>
    );
  }

  buttonPressed() {
    this.setState({ count: this.state.count + 1 })
  }
}

export default App;
