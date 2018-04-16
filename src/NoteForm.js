import React, { Component } from 'react';

class NoteForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      tags: ""
    }
  }

  render() {
    return (
      <div>
        <p>
          <input placeholder="input title..." value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
        </p>
        <p>
          <input placeholder="input description..." value={this.state.description} onChange={(event) => this.setState({description: event.target.value})} />
        </p>
        <p>
          <input placeholder="input tags..." value={this.state.tags} onChange={(event) => this.setState({tags: event.target.value})} />
        </p>
        &nbsp;
        <button onClick={() => this.buttonPressed()}>SAVE</button>
      </div>
    );
  }

  buttonPressed() {

    if (this.state.title && this.state.text && this.state.tags) {

      this.props.onPressed();
    } else {

      console.log("Note not saved because is not filled correctly");
    }

  }
}

export default NoteForm;
