import React, { Component } from 'react';
import Axios from 'axios';

import Card from './Card';
import CardSection from './CardSection';
import CardExpanded from './CardExpanded';

class PetsContainer extends Component {
  state = {
    pets: [],
    showExpandedCard: [false, null]
  };

  componentDidMount() {
    Axios.get('http://localhost:4000/pets')
      .then(results => results.data)
      .then(pets => this.setState({ pets }));
  }

  handleCardClick(card) {
    this.setState({ showExpandedCard: [true, card] });
  }

  handleOutsideCardClick() {
    if (this.state.showExpandedCard[0])
      this.setState({ showExpandedCard: [false, null] });
  }

  handleCardDestroy(imageId) {
    Axios.post('http://localhost:4000/destroy', { image_id: imageId })
      .then(response => console.log(response));
  }

  renderCards() {
    const { pets } = this.state;

    return pets.map(pet =>
      <Card key={pet._id} onClick={this.handleCardClick.bind(this, pet)}>
        <CardSection>
          <img src={`${pet.image}`} alt={`${pet.name}`} />
        </CardSection>
        <CardSection>
          <h4>{pet.name}</h4>
        </CardSection>
      </Card>
    );
  }

  renderExpandedCard() {
    const { showExpandedCard } = this.state;
    const card = showExpandedCard[1];

    document.querySelector('.navbar')
      .addEventListener('click', this.handleOutsideCardClick.bind(this));

    return (
        <CardExpanded>
          <CardSection>
            <img src={`${card.image}`} alt={`${card.name}`} />
          </CardSection>
          <CardSection>
            <h4>{card.name}</h4>
            <p>{card.about}</p>
            <button
              type="button"
              onClick={this.handleCardDestroy.bind(this, card.image_id)}
            >
            Destroy
            </button>
          </CardSection>
        </CardExpanded>
    );
  }

  render() {
    const { showExpandedCard } = this.state;
    return (
      <div className="pets-container">
        {showExpandedCard[0] ? this.renderExpandedCard() : null}
        {this.renderCards()}
      </div>
    );
  }
}

export default PetsContainer;
