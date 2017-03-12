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
      <div className="tmdb-searchbox col-lg-12">
        <div className="tmdb-searchbox__input col-lg-10">
          <input type="text" className="form-control" name="searchbox" id="searchbox" placeholder="search" />
        </div>
        <div className="tmdb-searchbox__submit col-lg-2">
          <button type="submit" className="btn btn-default" name="submit" id="submit" value="Search">Search</button>
        </div>
      </div>
    );
   }
 }

 export default SearchBox;
