/**
 * @file Search Component
 * @description Displays the Search box and Search Results
 * @author Andrew James
 * @version 0.1
 */
import React from 'react';

import SearchBox from './searchbox/SearchBox';
import SearchOptions from './searchoptions/SearchOptions';

class Search extends React.Component {
  render() {
    return (
      <div className="row">
        <SearchBox />
        <header className="col-lg-8 col-lg-offset-1">
          <h4>Search Options</h4>
        </header>
        <SearchOptions />
      </div>
    );
  }
}

export default Search;
