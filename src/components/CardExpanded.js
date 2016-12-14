import React from 'react';

const CardExpanded = props => {
  return (
    <div className="card-expanded-container">
      <div className="card-expanded">
        {props.children}
      </div>
    </div>
  );
};

export default CardExpanded;
