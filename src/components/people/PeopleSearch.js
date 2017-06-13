/**
 * @file PeopleSearch component
 * @description Presentation component for People Search landing page
 * @author Andrew James
 * @version 0.1
 */
import React, {PropTypes} from 'react';

import Search from '../common/search/Search';
import Results from '../results/Results';

const PeopleSearch = ({actions}) => {

  return (
    <div className="row">
      <div className="col-lg-12">
        <Search search={actions.peopleSearch}/>
        <Results />
      </div>
    </div>
  );
};

PeopleSearch.propTypes = {
  actions: PropTypes.object.isRequired
};

export default PeopleSearch;
