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
      <div>
        <SearchBox />
        <SearchOptions />
      </div>
    );
  }
}

export default Search;
