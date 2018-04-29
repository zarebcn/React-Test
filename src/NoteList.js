import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
          <Link to={"/view/" + note.id}>{note.title}</Link>
        </div>
      </div>
    );
  }

}

export default NoteList;
