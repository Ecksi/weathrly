import React from 'react';
import Search from './Search'
import './styles/css/Welcome.css';

const Welcome = (props) => {
  return (
    <div className="welcome">
      <h1>Welcome!</h1>
      <Search 
      citySearched={props.citySearched}
      toggleWelcome={props.toggleWelcome}/>
    </div>
  );
}

export default Welcome;
