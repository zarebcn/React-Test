import React, { Component } from 'react';

class NoteForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: "",
      note: this.getNote()
    }
  }

  render() {
    return (
      <div className="note-form">
        <div className="text-place">
          <div>
            <p>{this.state.error}</p>
            <input placeholder="input title..." value={this.state.note.title} onChange={(event) => {
              let note = this.state.note;
              note.title = event.target.value;
              this.setState({note});
            }} />
          </div>
          <div>
            <textarea placeholder="input description..." value={this.state.note.description} onChange={(event) => {
              let note = this.state.note;
              note.description = event.target.value;
              this.setState({note});
            }} />
          </div>
          <div>
            <input placeholder="input tags..." value={this.state.note.tags} onChange={(event) => {
             let note = this.state.note;
              note.tags = event.target.value;
              this.setState({note});
            }} />
          </div>
        </div>
        <button onClick={() => this.buttonPressed()}>SAVE</button>
      </div>
    );
  }

  // muestra en el form la nota a editar si se le ha enviado la nota o en caso contrario crea una nota vacia
  getNote() {

    let note = this.props.note;
    console.log(note);

    if (note) {
      return note;
    } else {
      return this.createEmptyNote();
    }
  }

  // crea una nota vacia
  createEmptyNote() {

    let nota = {
      title: "",
      description: "",
      tags: ""
    }

    return nota;
  }

  // al apretar el boton save y si los inputs estan correctamente rellenados, envia la nota creada a App.js mediante los props onPressed, en caso de que los input no esten bien rellenados muestra un mensaje de error
  buttonPressed() {

    if (this.state.note.title && this.state.note.description && this.state.note.tags) {

      let note = this.state.note;

      this.setState({error: ""});
      this.props.onPressed(note);
      this.clearInputs();
    } else {

      this.setState({error: "Note not saved because is not filled correctly"});
      console.log("Note not saved because is not filled correctly");
    }
  }

  // borra los valores de los input y los devuelve a su estado inicial
  clearInputs() {

    let nota = {
      title: "",
      description: "",
      tags: ""
    }

    this.setState({note: nota});
  }
}

export default NoteForm;
