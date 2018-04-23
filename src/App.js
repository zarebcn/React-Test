import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Form from './Form';
import NoteForm from './NoteForm';

class App extends Component {

  constructor(props) {

    super(props);
    this.state = {
      count: 0,
      text: "valor inicial",
      note: this.createEmptyNote()
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
        <p>
          <NoteForm onPressed={(note) => this.saveNote(note)} />
        </p>
        <p>
          {this.renderNote(this.state.note)}
        </p>
      </div>
    );
  }

  createEmptyNote() {

     let nota = {
        title: "",
        description: "",
        tags: ""
      }

    return nota;
  }

  buttonPressed() {
    this.setState({ count: this.state.count + 1 })
  }

  saveNote(note) {

    console.log(note);
    console.log("Note saved");

    this.setState({note: note}, () => console.log(this.state.note));
    /*setTimeout(() =>console.log(this.state.note), 1000);*/
  }

  renderNote(note) {

    return (
      <div>
        &nbsp;
        <div>
          Title:  {note.title}
        </div>
        &nbsp;
        <div>
          Description:  {note.description}
        </div>
        &nbsp;
        <div>
          Tags:  {note.tags}
        </div>
      </div>

    );
  }

}

export default App;
