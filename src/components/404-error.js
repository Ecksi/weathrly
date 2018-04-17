import React from 'react';
import './styles/css/404Error.css';

const ErrorPage = () => {
  return(
    <div className="error-page">
      <h1>404</h1>
      <h2>Whoops</h2>
      <h3>You did not enter a valid location</h3>
      <h4>It'd be a whole lot cooler if you did</h4>
      <img className="cloud cloud-1" src="./images/cloud.svg" alt="cloud"/>
      <img className="cloud cloud-2" src="./images/cloud.svg" alt="cloud"/>
      <img className="cloud cloud-3" src="./images/cloud.svg" alt="cloud"/>
      <img className="cloud cloud-4" src="./images/cloud.svg" alt="cloud"/>
    </div>
  )
}

export default ErrorPage;