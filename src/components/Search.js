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
    this.selectLocation = this.selectLocation.bind(this);
  }

  updateLocation(event) {
    const { name, value } = event.target;

    name === 'city' ?
    cityTrie.suggest(value) :
    stateTrie.suggest(value);

    this.setState({[name]: value});
  }

  selectLocation(event) {
    const { name, value } = event.target;

    name === 'city' ?
    cityTrie.select(value) :
    stateTrie.select(value);
  }

  render() {
    const citySuggestions = cityTrie.sortedSuggestions.map( (city, index) => {
      return (
        <li key={city} onClick={this.selectLocation}>{city}</li>
      )
    })
    const stateSuggestions = stateTrie.sortedSuggestions.map( state => {
      return (
        <li key={state} onClick={this.selectLocation}>{state}</li>
      )
    })

    return (
      this.props.welcome.showWelcome ?
        <div className="search welcomeSearch">
          <form action="" onSubmit={(event) => {
            event.preventDefault();
            this.selectLocation;
            this.props.apiCall(this.state)}}>
            <input onChange={this.updateLocation} type="text" name="city" value={this.state.city} className="location-input" placeholder="city" autoComplete="off" />
              <ul className="results city">{citySuggestions}</ul>
            <input onChange={this.updateLocation} type="text" name="state" value={this.state.state} className="location-input" placeholder="state" autoComplete="off" maxLength='2' />
              <ul className="results state">{stateSuggestions}</ul>
            <input type="submit"/>
          </form>
        </div> 
        :
        <div className="search">
          <form onSubmit={(event) => {
              event.preventDefault();
              this.props.apiCall(this.state)}}>
            <input onChange={this.updateLocation} type="text" name="city" value={this.state.city} className="location-input" placeholder="city" />
            <ul className="results">{citySuggestions}</ul>
            <input onChange={this.updateLocation} type="text" name="state" value={this.state.state} className="location-input" placeholder="state" maxLength='2' />
            <ul className="results">{stateSuggestions}</ul>
            <input type="submit" className="submit-button" />
          </form>
        </div>
    )
  }
}

export default Search;