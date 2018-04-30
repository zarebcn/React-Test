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

  getNote() {

    const id = this.props.noteId;
    let notes = this.props.notes;
    let note = this.createEmptyNote();
    console.log(id);

    for (let i = 0; i < notes.length; i++) {

      if (notes[i].id == id) {

        note = notes[i];
      }
    }

    if (id) {

      return note;

    } else {

      return this.createEmptyNote();
    }
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
