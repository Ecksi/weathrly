import React from 'react';
import './styles/css/Card.css';

const Card = ({ hour, condition, image, temp, call, day, tempHigh, tempLow }) => {
  if (call === '7-hour') {
    if (hour > 12 ) {
      hour = hour - 12;
    }
    return (
      <div className="Card">
        <h2 className="cardHeader">{hour}</h2>
        <img src={image} alt="weather" />
        <h3>{temp}</h3>
      </div>
    );
  } else {
    return (
      <div className="Card">
        <h2 className="cardHeader cardText">{day}</h2>
        <img src={image} alt="weather" />
        <div className="ten-day-high-low">
          <h3 className="cardText">{tempHigh}F</h3>
          <h3 className="cardText">{tempLow}F</h3>
        </div>
      </div>
    );
  }
}

export default Card;
