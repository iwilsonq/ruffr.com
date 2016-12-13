import React, { Component } from 'react';
import Axios from 'axios';
import Card from './Card';
import CardSection from './CardSection';

class PetsContainer extends Component {
  state = {
    pets: []
  };

  componentDidMount() {
    Axios.get('http://localhost:4000/pets')
      .then(results => results.data)
      .then(pets => this.setState({ pets }));
  }

  renderCards() {
    const { name, pictures } = this.state.pets;

    return this.state.pets.map((pet, i) =>
      <Card key={i}>
        <CardSection>
          <img src={`http://localhost:4000/images/${pet.pictures[0]}`} alt={`${name}`} />
        </CardSection>
        <CardSection>
          <h3>{name}</h3>
        </CardSection>
      </Card>
    );
  }

  render() {
    return (
      <div className="pets-container">
        {this.renderCards()}
      </div>
    );
  }
}

export default PetsContainer;
