/**
 * @file
 * @description
 * @author Andrew James
 * @version 0.1
 */
import React, {PropTypes} from 'react';

class SearchOptionLanguages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {language: 'any'};

    //this.handleChange = this.handleChange.bind(this);
  }
  /*
  handleChange(event) {
    this.setState({language: event.target.value});
  }
  */
  render() {
    const {languages} = this.props;
    const {setLanguage} = this.props;

    return (
      <select defaultValue={this.state.language} onChange={setLanguage} className="tmdb-search-option" id="tmdb-search-option-language" name="tmdb-search-option-language">
        <option value="any">any</option>
        {
          languages.map(
            (language) => {
              return <option key={language.alpha2} value={language.alpha2}>{language.English}</option>;
            }
          )
        }
      </select>
    );
  }
}

/*
const SearchOptionLanguages = ({languages}) => {
  return (
    <select className="tmdb-search-option" id="tmdb-search-option-language" name="tmdb-search-option-language" value={'any'}>
      <option value="any">any</option>
      {
        languages.map(
          (language) => {
            return <option key={language.alpha2} value={language.alpha2}>{language.English}</option>;
          }
        )
      }
    </select>
  );
};
*/
SearchOptionLanguages.propTypes = {
  languages: PropTypes.array.isRequired,
  setLanguage: PropTypes.func.isRequired
};

export default SearchOptionLanguages;
