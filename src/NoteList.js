import React, { Component } from 'react';

class NoteList extends Component {

  render() {
    return (
      <div className="note-list">
        {this.props.notes.map(note => this.renderNote(note))}
      </div>
    );
  }

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

export default NoteList;
