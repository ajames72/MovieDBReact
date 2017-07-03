/*eslint-disable import/default*/
import Config from './Config';
import expect from 'expect';
import environment from '../environments/environment';

describe('The RESTful API Config', function() {

  it('should get the Movie Search RESTful API', function() {
    expect(Config.getMovieSearchAPI().url)
      .toEqual(`${environment.endpoints.MOVIE_SEARCH_API}df3908a9e93ea4fa095429a46c0eec66`);
  });

  it('should use the GET method for the Movie Search RESTful API', function() {
    expect(Config.getMovieSearchAPI().method).toEqual('GET');
  });

  it('should get the People Search RESTful API', function() {
    expect(Config.getPeopleSearchAPI().url)
      .toEqual(`${environment.endpoints.PEOPLE_SEARCH_API}df3908a9e93ea4fa095429a46c0eec66`);
  });

  it('should use the GET method for the People Search RESTful API', function() {
    expect(Config.getPeopleSearchAPI().method).toEqual('GET');
  });

  it('should get the TVShow Search RESTful API', function() {
    expect(Config.getTVShowSearchAPI().url)
      .toEqual(`${environment.endpoints.TVSHOW_SEARCH_API}df3908a9e93ea4fa095429a46c0eec66`);
  });

  it('should use the GET method for the TVShow Search RESTful API', function() {
    expect(Config.getTVShowSearchAPI().method).toEqual('GET');
  });

  it('should get the Collection Search RESTful API', function() {
    expect(Config.getCollectionSearchAPI().url)
      .toEqual(`${environment.endpoints.COLLECTION_SEARCH_API}df3908a9e93ea4fa095429a46c0eec66`);
  });

  it('should use the GET method for the Collection Search RESTful API', function() {
    expect(Config.getCollectionSearchAPI().method).toEqual('GET');
  });

  it('should get the configuration RESTful API', function() {
    expect(Config.getTMDBApiConfiguration().url)
      .toEqual(`${environment.endpoints.TMDB_CONFIGURATION_API}df3908a9e93ea4fa095429a46c0eec66`);
  });

  it('should use the GET method for the configuration RESTful API', function() {
    expect(Config.getTMDBApiConfiguration().method).toEqual('GET');
  });

  it('should get the configuration for ISO639_1 codes', function() {
    expect(Config.getISO639_1CodeSrc().url)
      .toEqual(environment.endpoints.ISO639_1_SRC);
  });

  it('should use the GET method for the configuration ISO639_1 codes', function() {
    expect(Config.getISO639_1CodeSrc().method).toEqual('GET');
  });

  it('should get the configuration ISO3166_1 codes', function() {
    expect(Config.getISO3166_1CodeSrc().url)
      .toEqual(environment.endpoints.ISO3166_1_SRC);
  });

  it('should use the GET method for the configuration ISO3166_1 codes', function() {
    expect(Config.getISO3166_1CodeSrc().method).toEqual('GET');
  });
});
