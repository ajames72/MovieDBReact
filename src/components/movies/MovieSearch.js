/**
 * @file MovieSearch component
 * @description Presentation component for Movie Search landing page
 * @author Andrew James
 * @version 0.1
 */
import React, {PropTypes} from 'react';

import Search from '../common/search/Search';
import Results from '../results/Results';

const MovieSearch = ({actions}) => {

  return (
    <div className="row">
      <div className="col-lg-12">
        <Search search={actions.movieSearch}/>
      <Results />
      </div>
    </div>
  );
};

MovieSearch.propTypes = {
  actions: PropTypes.func.isRequired
};

export default MovieSearch;
