import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import NoteForm from './NoteForm';
import NoteList from './NoteList';
import NoteView from './NoteView';

class App extends Component {

  constructor(props) {

    super(props);
    this.state = {
      count: 0,
      text: "valor inicial",
      note: this.createEmptyNote(),
      nextId: 2,
      notes: [ {id:1, title:"dummy", description:"initial note as example", tags:""} ]
    }
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path='/' render={(routerProps) => this.renderList(routerProps)} />
              <Route exact path='/new' render={(routerProps) => this.renderForm(routerProps)} />
              <Route exact path='/view/:id' render={(routerProps) => this.renderNote(routerProps)} />
              <Route exact path='/edit/:id' render={(routerProps) => this.renderForm(routerProps)} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }

  renderList(routerProps) {
    return (
      <div>
        <button onClick={() => routerProps.history.push("/new")}>NEW NOTE</button>
        {/* <Link to={"/new"}>Nueva nota</Link> */}
        <NoteList notes={this.state.notes} />
      </div>
    );
  }

  renderForm(routerProps) {

    const id = routerProps.match.params.id;
    let note = this.state.notes.filter(x => x.id == id)[0];

    return (
      <div className="home-button">
        <button onClick={() => routerProps.history.push("/")}>HOME</button>
        {/* <Link to={"/"}>Home</Link> */}
        <NoteForm onPressed={(note) => this.saveNote(note, routerProps)} note={note} />
      </div>
    );
  }

  renderNote(routerProps) {

    const noteId = routerProps.match.params.id;

    let note = this.state.notes.filter(x => x.id == noteId)[0];
    console.log(note);

    return (
      <div>
        <button onClick={() => routerProps.history.push("/")}>HOME</button>
        <NoteView note={note}/>
        <button onClick={() => routerProps.history.push("/edit/" + note.id)}>EDIT</button> <button onClick={() => {
            this.deleteNote(note);
            routerProps.history.push("/");
          }}>DELETE</button>
      </div>
    );
  }

  deleteNote(note) {

    let noteId = note.id;
    let notes = this.state.notes;

    for (let i = 0; i < notes.length; i++) {

      if (notes[i].id == noteId) {

        notes.splice(i, 1);
      }
    }

    this.setState({notes: notes});
  }

  createEmptyNote() {

     let nota = {
        title: "",
        description: "",
        tags: ""
      }

    return nota;
  }

  saveNote(note, routerProps) {

    console.log(note);
    console.log("Note saved");

    this.setState({note: note}, () => console.log(this.state.note));

    let notes = this.state.notes;

    if (note.id == null) {

      let nota = {
        id: this.state.nextId,
        title: note.title,
        description: note.description,
        tags: note.tags
      }

      notes.push(nota);
      this.setState({notes: notes, nextId: this.state.nextId + 1}, () => console.log(this.state.notes));

    } else {

      for (let i = 0; i < notes.length; i++) {

        if (notes[i].id == note.id) {

          notes[i] = note;
          this.setState({notes: notes});
        }
      }
    }

    routerProps.history.push("/");
  }


}

export default App;
