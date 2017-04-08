/**
 * @file
 * @description
 * @author Andrew James
 * @version 0.1
 */
import React, {PropTypes} from 'react';

class SearchOptionCountries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'any'};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    const {countries} = this.props;
    return (
      <select defaultValue={this.state.value} onChange={this.handleChange} className="tmdb-search-option" id="tmdb-search-option-country" name="tmdb-search-option-country">
        <option value="any">any</option>
        {
          countries.map(
            (country) => {
              return <option key={country.Code} value={country.Code}>{country.Name}</option>;
            }
          )
        }
      </select>
    );
  }
}

SearchOptionCountries.propTypes = {
  countries: PropTypes.array.isRequired
};

export default SearchOptionCountries;
