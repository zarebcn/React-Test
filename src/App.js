import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import NoteForm from './NoteForm';
import NoteList from './NoteList';
import NoteView from './NoteView';
import './Util.js';

class App extends Component {

  constructor(props) {

    super(props);
    this.state = {
      nextId: 2,
      notes: [ {id:1, title:"dummy", description:"sample note", tags:""} ]
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

  // muestra en pantalla la lista de notas
  renderList(routerProps) {
    return (
      <div>
        <button onClick={() => routerProps.history.push("/new")}>NEW NOTE</button>
        {/* <Link to={"/new"}>Nueva nota</Link> */}
        <NoteList notes={this.state.notes} />
      </div>
    );
  }

  // muestra en pantalla el formulario para crear una nota o editarla
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

  // muestra la nota seleccionada con todo su contenido
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

  // borra la nota seleccionada
  deleteNote(note) {

    let notes = this.state.notes;
    let index = notes.withIndex().filter(o => o.elem.id == note.id)[0].idx;
    notes.splice(index, 1);
    this.setState({notes: notes}, () => console.log("Note deleted"));
  }

  // guarda una nota nueva si no tiene ID y si esta tiene ID, actualiza la nota con los datos editados
  saveNote(note, routerProps) {

    console.log(note);

    let notes = this.state.notes;

    if (note.id == null) {

      let nota = {
        id: this.state.nextId,
        title: note.title,
        description: note.description,
        tags: note.tags
      }

      notes.push(nota);
      console.log("Note saved");
      this.setState({notes: notes, nextId: this.state.nextId + 1}, () => console.log(this.state.notes));

    } else {

      let index = notes.withIndex().filter(o => o.elem.id == note.id)[0].idx;
      notes[index] = note;
      this.setState({notes: notes}, () => console.log("Note edited"));
    }

    routerProps.history.push("/");
  }


}

export default App;
