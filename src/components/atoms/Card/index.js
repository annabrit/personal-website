import React from 'react';
import './Card.scss';

const Card = ({ children }) => {
  return (
    <div className="card-shadow">
      <div className="card">{children}</div>
    </div>
  );
};

export default Card;
