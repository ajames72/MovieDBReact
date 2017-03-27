import nock from 'nock';
import expect from 'expect';
import * as rest from './Client';

describe('Get ISO639_1 Codes', function() {
  let scope = nock('http://localhost')
                .get('/MovieDB/language-codes/r/language-codes.php')
                .reply(200, [
                        {
                          "alpha2": "aa",
                          "English": "lang_test_a"
                        },
                        {
                          "alpha2": "bb",
                          "English": "lang_test_b"
                        },
                        {
                          "alpha2": "cc",
                          "English": "lang_test_c"
                        },
                        {
                          "alpha2": "dd",
                          "English": "lang_test_d"
                        }
                      ]);
  it('should return a list of ISO639-1 International Language Codes in the response', function(){
    rest.getISO639_1Codes().then(function(response){
      expect(response[0]).toEqual({
        "alpha2": "aa",
        "English": "lang_test_a"
      });
    });
  });
});
