import nock from 'nock';
import expect from 'expect';
import * as TestData from '../../test/TestData';
import * as rest from './Client';

describe('Get ISO639_1 Codes', () => {

  nock.disableNetConnect();

  let scope = nock('http://localhost')
                .get('/MovieDB/language-codes/r/language-codes.php')
                .reply(200, TestData.languages);

  it('should return a list of ISO639_1 International Language Codes in the response', () => {
    rest.getISO639_1Codes().then((response) => {
      expect(response[0]).toEqual({
        "alpha2": "aa",
        "English": "lang_test_a"
      });
    }).catch((error) => {

    });
  });
});

describe('Get ISO3166_1 Codes', () => {

  nock.disableNetConnect();

  let scope = nock('http://localhost')
                .get('/MovieDB/data/core/country-list/r/data.php')
                .reply(200, TestData.countries);

  it('should return a list of ISO3166_1 International Language Codes in the response', () => {
    rest.getISO3166_1Codes().then((response) => {
      expect(response[0]).toEqual({
        "Name": "Country_a",
        "Code": "CA"
      });
    }).catch((error) => {

    });
  });
});

describe('Search Movie API', () => {

  describe('param string', () => {
    it('should only contain the query parameter', () => {
      let mockQuery = {
        query: 'Search Term',
        include_adult: false,
        region: 'any',
        language: 'any',
        year: '',
        primary_release_year: ''
      };

      let expectedParamString = '&query=Search%20Term';

      expect(rest.setSearchMoviesParamString(mockQuery)).toEqual(expectedParamString);
    });

    it('should contain the query parameter and include_adult flag', () => {
      let mockQuery = {
        query: 'Search Term',
        include_adult: true,
        region: 'any',
        language: 'any',
        year: '',
        primary_release_year: ''
      };

      let expectedParamString = '&query=Search%20Term&include_adult=true';

      expect(rest.setSearchMoviesParamString(mockQuery)).toEqual(expectedParamString);
    });

    it('should contain the query, include_adult flag, language and region parameters', () => {
      let mockQuery = {
        query: 'Search Term',
        include_adult: true,
        language: 'aa',
        region: 'AS',
        year: '',
        primary_release_year: ''
      };

      let expectedParamString = '&query=Search%20Term&include_adult=true&language=aa&region=AS';

      expect(rest.setSearchMoviesParamString(mockQuery)).toEqual(expectedParamString);
    });

    it('should include all parameters', () => {
      let mockQuery = {
        query: "Search Term",
        include_adult: 'true',
        language: 'aa',
        region: 'AS',
        year: '1999',
        primary_release_year: '2000'
      };

      let expectedParamString = '&query=Search%20Term&include_adult=true&language=aa&region=AS&year=1999&primary_release_year=2000';

      expect(rest.setSearchMoviesParamString(mockQuery)).toEqual(expectedParamString);
    });
  });

  describe('API call', () => {
    let fakeServer, spyCallback;

    let mockResponse = {
      "page": 1,
      "results": [],
      "total_results": 10,
      "total_pages": 10
    };

    let mockQuery = {
      query: "Search Term",
      include_adult: 'true',
      language: 'aa',
      region: 'AS',
      year: '1999',
      primary_release_year: '2000'
    };

    nock.disableNetConnect();

    let scope = nock('http://localhost')
      .get('/3/search/movie?api_key=123456&query=Search%20Term&include_adult=true&language=aa&region=AS&year=1999&primary_release_year=2000')
      .reply(200, mockResponse);

    it('should return a response for the movie API', () => {
      rest.searchMovies(mockQuery).then((response) => {
        expect(response).toEqual(mockResponse);
      }).catch((error) => {

      });
    });
  });


});
