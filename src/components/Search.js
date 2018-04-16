import React, { Component } from 'react';
import './styles/css/Search.css';
import '../locationSanitizer';
import locationData from '../cityData';
import { citySanitizer, stateSanitizer } from '../locationSanitizer';
const Trie = require('auto-complete');

const cityTrie = new Trie();
const stateTrie =  new Trie();

cityTrie.populate(citySanitizer(locationData.data));
stateTrie.populate(stateSanitizer(locationData.data));

class Search extends Component {
  constructor() {
    super();

    this.state = {
      city: '',
      state: ''
    }

    this.updateLocation = this.updateLocation.bind(this);
  }

  updateLocation(event) {
    const { name, value } = event.target;

    name === 'city' ?
    cityTrie.suggest(value) :
    stateTrie.suggest(value);

    this.setState({[name]: value});
  }

  render() {
    const citySuggestions = cityTrie.sortedSuggestions.map( (city, index) => {
      return (
        <option key={city}>{city}</option>
      )
    })
    const stateSuggestions = stateTrie.sortedSuggestions.map( state => {
      return (
        <option key={state}>{state}</option>
      )
    })
    const userInputs = 
      <form onSubmit={(event) => {
          event.preventDefault();
          this.props.apiCall(this.state)}}>
        <input list="cities-list" onChange={this.updateLocation} type="text" name="city" value={this.state.city} className="location-input" placeholder="city" />
        <datalist id="cities-list" className="results">{citySuggestions}</datalist>
        <input list="states-list" onChange={this.updateLocation} type="text" name="state" value={this.state.state} className="location-input" placeholder="state" maxLength='2' />
        <datalist id="states-list" className="results">{stateSuggestions}</datalist>
        <input type="submit" className="submit-button" />
      </form>

    return (
      this.props.welcome.showWelcome ?
        <div className="search welcomeSearch">
          {userInputs}
        </div> 
        :
        <div className="search">
          {userInputs}
        </div>
    )
  }
}

export default Search;