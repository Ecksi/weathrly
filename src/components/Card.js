import React from 'react';
import './styles/css/Card.css';

const Card = ({ hour, condition, image, temp, call, day, tempHigh, tempLow }) => {
  const sevenHourCard = (
    <div className="Card">
      <h2 className="cardHeader">{hour}</h2>
      <img src={image} alt="weather" />
      <h3 className="hourly-temp">{temp}&#176;</h3>
    </div>
  );

  const tenHourCard = (
    <div className="Card">
      <h2 className="cardText cardHeader">{day}</h2>
      <img src={image} alt="weather" />
      <div className="ten-day-high-low">
        <h3 className="cardText cardHigh">{tempHigh}&#176;</h3>
        <h3 className="cardText cardLow">{tempLow}&#176;</h3>
      </div>
    </div>
  )

  return call === '7-hour' ? sevenHourCard : tenHourCard
}

export default Card;
