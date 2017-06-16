/**
 * @file
 * @description
 * @author Andrew James
 * @version 0.1
 */

import React, {PropTypes} from 'react';

const SearchBox = ({onSubmit, onChange}) => {
  return (
    <div className="tmdb-searchbox col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <div className="row">
        <div className="tmdb-searchbox__input col-lg-10 col-md-10 col-sm-10 col-xs-8">
          <input type="text" className="form-control" name="searchbox" id="searchbox" placeholder="search" onChange={onChange} />
        </div>
        <div className="tmdb-searchbox__submit col-lg-2 col-md-2 col-sm-2 col-xs-4">
          <button type="submit" className="btn btn-default" name="submit" id="submit" value="Search" onClick={onSubmit}>Search</button>
        </div>
      </div>
    </div>
  );
};

SearchBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default SearchBox;
