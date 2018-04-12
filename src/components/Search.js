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
    const citySuggestions = cityTrie.sortedSuggestions.map( city => {
      return (
        <li>{city}</li>
      )
    })
    const stateSuggestions = stateTrie.sortedSuggestions.map( state => {
      return (
        <li>{state}</li>
      )
    })

    return(
    <div className="search">
      <form action="" onSubmit={(event) => {
          event.preventDefault();
          this.props.apiCall(this.state)}}>
        <input onChange={this.updateLocation} type="text" name="city" value={this.state.city} />
          <ul className="results">{citySuggestions}</ul>
        <input onChange={this.updateLocation} type="text" name="state" value={this.state.state} />
          <ul className="results">{stateSuggestions}</ul>
        <input type="submit" />
      </form>
    </div>
    )
  }
}

export default Search;