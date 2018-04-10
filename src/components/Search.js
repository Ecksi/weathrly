import React, { Component } from 'react';
import './styles/scss/Search.scss';

class Search extends Component {
  constructor(props) {
    super();
    this.state = {
      userCitySearch: props.citySearched
    }
  }

  render() {
    return (
      <div className="search">
        <input type="text"/>
        <button onClick={this.props.toggleWelcome}>Submit</button>
      </div>
    );
  }

}

export default Search;
