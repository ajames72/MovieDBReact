/**
 * @file
 * @description
 * @author Andrew James
 * @version 0.1
 */

 import React from 'react';

 class SearchBox extends React.Component {
   render() {
     return (
      <div className="tmdb-searchbox">
        <div className="tmdb-searchbox__input">
          <input type="text" name="searchbox" id="searchbox" />
        </div>
        <div className="tmdb-searchbox__submit">
          <button type="submit" name="submit" id="submit" value="Search">Search</button>
        </div>
      </div>
    );
   }
 }

 export default SearchBox;
