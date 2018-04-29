import React, { Component } from 'react';

class NoteList extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="note-list">
        {this.props.notes.map(note => this.renderNote(note))}
      </div>
    );
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

export default NoteList;
