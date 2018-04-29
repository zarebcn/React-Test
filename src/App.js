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
      note: this.createEmptyNote(),
      notes: []
    }
  }

  render() {
    return (
      <div className="App">
        <p>
          <NoteForm onPressed={(note) => this.saveNote(note)} />
        </p>
        <p>
          {this.state.notes.map(note => this.renderNote(note))}
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

    let notes = this.state.notes;
    notes.push(note);
    this.setState({notes: notes}, () => console.log(this.state.notes));
    /*setTimeout(() =>console.log(this.state.note), 1000);*/
  }

  renderNote(note) {

    return (
      <div className="note-view">
        <div>
          Title:  {note.title}
        </div>
        <div>
          Description:  {note.description}
        </div>
        <div>
          Tags:  {note.tags}
        </div>
      </div>
    );
  }

}

export default App;
