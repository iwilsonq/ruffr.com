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
    const { pets } = this.state;

    return pets.map(pet =>
      <Card key={pet._id}>
        <CardSection>
          <img src={`http://localhost:4000/images/${pet.pictures[0]}`} alt={`${pet.name}`} />
        </CardSection>
        <CardSection>
          <h4>{pet.name}</h4>
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
