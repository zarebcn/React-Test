import React, { Component } from 'react';

class NoteView extends Component {

  render() {
    return (
      <div>
        {this.renderNote(this.props.note)}
      </div>
    );
  }

  // muestra en pantalla la nota con todo su contenido
  renderNote(note) {

    return (
      <div className="note-view" key={note.id}>
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

export default NoteView;
