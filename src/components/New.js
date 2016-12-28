import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import Axios from 'axios';
import CroppingTool from './CroppingTool';

class NewPost extends Component {
  state = {
    name: '',
    about: '',
    image: ''
  };

  handleSubmit() {
    const { name, about, image } = this.state;
    let data = new FormData();
    data.append('name', name);
    data.append('about', about);
    data.append('image', image);

    Axios({
      method: 'post',
      url: 'https://api-ruffr.herokuapp.com/create',
      data
    })
    .then(response => console.log(response))
    .then(() => browserHistory.push('/'));
  }

  handleTextChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleImageUpload(image) {
    this.setState({ image })
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

            <CroppingTool
              onCrop={this.handleImageUpload.bind(this)}
            />

            <div id="image-preview" />

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
