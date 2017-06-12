//var Config = require('./Config.js');
import Config from './Config';
import expect from 'expect';

describe('The RESTful API Config', function() {

  it('should get the search RESTful API', function() {
    expect(Config.getMovieSearchAPI().url)
      .toEqual("http://localhost/3/search/movie?api_key=df3908a9e93ea4fa095429a46c0eec66");
  });

  it('should use the GET method for the search RESTful API', function() {
    expect(Config.getMovieSearchAPI().method).toEqual('GET');
  });

  it('should get the configuration RESTful API', function() {
    expect(Config.getTMDBApiConfiguration().url)
      .toEqual("https://localhost/3/configuration?api_key=df3908a9e93ea4fa095429a46c0eec66");
  });

  it('should use the GET method for the configuration RESTful API', function() {
    expect(Config.getTMDBApiConfiguration().method).toEqual('GET');
  });

  it('should get the configuration for ISO639_1 codes', function() {
    expect(Config.getISO639_1CodeSrc().url)
      .toEqual("http://localhost/MovieDB/language-codes/r/language-codes.php");
  });

  it('should use the GET method for the configuration ISO639_1 codes', function() {
    expect(Config.getISO639_1CodeSrc().method).toEqual('GET');
  });

  it('should get the configuration ISO3166_1 codes', function() {
    expect(Config.getISO3166_1CodeSrc().url)
      .toEqual("http://localhost/MovieDB/data/core/country-list/r/data.php");
  });

  it('should use the GET method for the configuration ISO3166_1 codes', function() {
    expect(Config.getISO3166_1CodeSrc().method).toEqual('GET');
  });
});
