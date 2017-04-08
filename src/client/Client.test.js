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
