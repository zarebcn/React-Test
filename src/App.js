import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import NoteForm from './NoteForm';
import NoteList from './NoteList';

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
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }

  renderList(routerProps) {
    return (
      <div>
        <button onClick={() => routerProps.history.push("/new")}>Nueva nota</button>
        {/* <Link to={"/new"}>Nueva nota</Link> */}
        <NoteList notes={this.state.notes} />
      </div>
    );
  }

  renderForm(routerProps) {
    return (
      <div>
        <button onClick={() => routerProps.history.push("/")}>Home</button>
        {/* <Link to={"/"}>Home</Link> */}
        <NoteForm onPressed={(note) => this.saveNote(note)} />
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

    note.id = this.state.nextId;

    notes.push(note);
    this.setState({notes: notes, nextId: this.state.nextId + 1}, () => console.log(this.state.notes));
    /*setTimeout(() =>console.log(this.state.note), 1000);*/
  }


}

export default App;
