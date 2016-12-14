import React, { Component } from 'react';
import Axios from 'axios';

class NewPost extends Component {
  state = {
    name: '',
    about: '',
    image: ''
  };

  handleSubmit() {
    Axios.post('http://localhost:4000/create', {
      ...this.state
    }).then(results => console.log(results));
  }

  handleTextChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleImageUpload() {
    const selectedFile = document.getElementById('image-upload').files[0];
    const img = document.createElement('img');
    img.file = selectedFile;

    const preview = document.getElementsByClassName('preview')[0];
    preview.appendChild(img);

    const reader = new FileReader();
    reader.onload = (aImg => e => {
        aImg.src = e.target.result;
        console.log(this);
        this.setState({ image: e.target.result });
    })(img);
    reader.readAsDataURL(selectedFile);
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
            name="image"
            id="image-upload"
            onChange={this.handleImageUpload.bind(this)}
          />
          <div className="preview" />

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
