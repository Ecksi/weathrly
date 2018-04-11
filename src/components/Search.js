import React, { Component } from 'react';
import './styles/scss/Search.scss';
import '../locationSanitizer';
// import Trie from 'auto-complete';
import locationData from '../cityData';
import { citySanitizer, stateSanitizer } from '../locationSanitizer';

// const cityTrie = new Trie();
// const stateTrie =  new Trie();

// cityTrie.populate(citySanitizer(locationData.data));
// stateTrie.populate(stateSanitizer(locationData.data));
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

    this.setState({[name]: value});
  }

  render() {
    return(
    <div className="search">
      <form action="" onSubmit={(event) => {
          event.preventDefault();
          this.props.apiCall(this.state)}}>
        <input onChange={this.updateLocation} type="text" name="city" value={this.state.city} />
        <input onChange={this.updateLocation} type="text" name="state" value={this.state.state} />
        <input type="submit" />
      </form>
    </div>
    )
  }
}

export default Search;