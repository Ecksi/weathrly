import React from 'react';
import './styles/scss/Search.scss';

 const Search = (props) => { //make dumb
  return (
    <div className="search">
      <input type="text"/>
      <button onClick={props.searchApi}>Submit</button>
    </div>
  );
}

export default Search;
