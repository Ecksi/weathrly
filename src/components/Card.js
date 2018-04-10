import React from 'react';
import './styles/css/Card.css';

const Card = ({ hour, condition, image, temp}) => {
  return (
    <div className="Card">
      <h2>{hour}</h2>
      <img src={image} alt="weather" />
      <h3>{temp}</h3>
    </div>
  );
}

export default Card;
