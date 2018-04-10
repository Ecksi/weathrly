import React from 'react';
import './styles/css/Card.css';

const Card = ({ hour, condition, image, temp, call, day, tempHigh, tempLow }) => {
  if (call === '7-hour') {
    return (
      <div className="Card">
        <h2>{hour}</h2>
        <img src={image} alt="weather" />
        <h3>{temp}</h3>
      </div>
    );
  } else {
    return (
      <div className="Card">
        <h2>{day}</h2>
        <img src={image} alt="weather" />
        <h3>{tempHigh}</h3>
        <h3>{tempLow}</h3>
      </div>
    );
  }
}

export default Card;
