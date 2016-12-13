import React from 'react';

const CardSection = props => {
  return (
    <div className="card-section">
      {props.children}
    </div>
  );
};

export default CardSection;
