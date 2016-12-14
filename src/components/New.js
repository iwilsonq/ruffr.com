import React, { Component } from 'react';

class NewPost extends Component {
  state = {
    name: '',
    about: '',
    image: ''
  };

  handleSubmit() {
    console.log(this.state);
  }

  handleTextChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <div className="new-post">
        <div className="new-section">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleTextChange.bind(this)}
          />
        </div>
        <div className="new-section">
          <label>About</label>
          <input
            type="text"
            name="about"
            value={this.state.about}
            onChange={this.handleTextChange.bind(this)}
          />
        </div>
        <div className="new-section">
          <label>Picture</label>
          <input
            type="file"
            name="name"
            value={this.state.image}
          />
        </div>
        <div className="new-section">
          <button
            type="button"
            onClick={this.handleSubmit.bind(this)}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default NewPost;
