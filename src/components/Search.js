import React, { Component } from 'react';
import { citySanitizer, stateSanitizer } from '../locationSanitizer';
import locationData from '../cityData';
import Trie from 'auto-complete';
import '../locationSanitizer';
import './styles/css/Search.css';

const cityTrie = new Trie();
const stateTrie = new Trie();

cityTrie.populate(citySanitizer(locationData.data));
stateTrie.populate(stateSanitizer(locationData.data));

class Search extends Component {
  constructor() {
    super();

    this.state = {
      city: '',
      state: ''
    };

    this.updateLocation = this.updateLocation.bind(this);
  }

  updateLocation(event) {
    const { name, value } = event.target;

    name === 'city' ?
      cityTrie.suggest(value) :
      stateTrie.suggest(value);

    this.setState({ [name]: value });
  }

  render() {
    const citySuggestions = cityTrie.sortedSuggestions.map((city, index) => {
      return (
        <option key={city}>{city}</option>
      );
    });

    const stateSuggestions = stateTrie.sortedSuggestions.map(state => {
      return (
        <option key={state}>{state}</option>
      );
    });

    const userInputs =
      <form onSubmit={(event) => {
        event.preventDefault();
        this.props.apiCall(this.state);
      }}>
        <input onChange={this.updateLocation}
          type="text"
          className="location-input"
          name="city"
          value={this.state.city}
          list="cities-list"
          placeholder="city"
        />
        <datalist id="cities-list"
          className="results">{citySuggestions}
        </datalist>
        <input onChange={this.updateLocation}
          type="text"
          className="location-input"
          name="state"
          value={this.state.state}
          list="states-list"
          placeholder="state"
          maxLength='2'
        />
        <datalist id="states-list"
          className="results">{stateSuggestions}
        </datalist>
        <input type="submit" className="submit-button" />
      </form>;

    return (
      this.props.welcome.showWelcome ?
        <div className="search welcomeSearch">
          {userInputs}
        </div> :
        <div className="search">
          {userInputs}
        </div>
    );
  }
}

export default Search;