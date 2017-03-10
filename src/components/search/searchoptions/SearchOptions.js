/**
 * @file
 * @description
 * @author Andrew James
 * @version 0.1
 */

 import React from 'react';

 class SearchOptions extends React.Component {
   render() {
     return (
       <div className="tmdb-searchoptions">
          <header>
            <h2>Search Options</h2>
          </header>
          <div>
            <div className="tmdb-searchoption">
              <label htmlFor="tmdb-search-option-adult">Adult</label>
              <input type="checkbox" className="tmdb-searchoption__field" id="tmdb-search-option-adult" name="tmdb-search-option-adult" />
            </div>
            <div className="tmdb-searchoption" id="langOpts">
              <label htmlFor="tmdb-search-option-language">Language</label>
            </div>
            <div className="tmdb-searchoption" id="regionOpts">
              <label htmlFor="tmdb-search-option-region">Region</label>
            </div>
            <div className="tmdb-searchoption">
              <label htmlFor="tmdb-search-option-year">Year</label>
              <input type="number" className="tmdb-searchoption__field" id="tmdb-search-option-year" name="tmdb-search-option-year" max="2017" />
            </div>
            <div className="tmdb-searchoption">
              <label htmlFor="tmdb-search-option-primary">Primary Release Year</label>
              <input type="number" className="tmdb-searchoption__field" id="tmdb-search-option-primary" name="tmdb-search-option-primary" max="2017" />
            </div>
          </div>
        </div>
     );
   }
 }

export default SearchOptions;
