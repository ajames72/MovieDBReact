import expect from 'expect';
import MovieSearchReducer from './MovieSearchReducer';
import * as types from '../actions/ActionTypes';
import * as SearchActions from '../actions/SearchActions';

const initialState = {
  results: []
};

const results = {
  "page": 1,
  "results": [
    {
      "poster_path": "/tvSlBzAdRE29bZe5yYWrJ2ds137.jpg",
      "adult": false,
      "overview": "Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.",
      "release_date": "1977-05-25",
      "genre_ids": [
        12,
        28,
        878
      ],
      "id": 11,
      "original_title": "Star Wars",
      "original_language": "en",
      "title": "Star Wars",
      "backdrop_path": "/4iJfYYoQzZcONB9hNzg0J0wWyPH.jpg",
      "popularity": 10.221142,
      "vote_count": 5623,
      "video": false,
      "vote_average": 8
    },
    {
      "poster_path": "/qjiskwlV1qQzRCjpV0cL9pEMF9a.jpg",
      "adult": false,
      "overview": "A rogue band of resistance fighters unite for a mission to steal the Death Star plans and bring a new hope to the galaxy.",
      "release_date": "2016-12-14",
      "genre_ids": [
        878
      ],
      "id": 330459,
      "original_title": "Rogue One: A Star Wars Story",
      "original_language": "en",
      "title": "Rogue One: A Star Wars Story",
      "backdrop_path": "/tZjVVIYXACV4IIIhXeIM59ytqwS.jpg",
      "popularity": 17.661214,
      "vote_count": 3729,
      "video": false,
      "vote_average": 7.3
    },
    {
      "poster_path": "/weUSwMdQIa3NaXVzwUoIIcAi85d.jpg",
      "adult": false,
      "overview": "Thirty years after defeating the Galactic Empire, Han Solo and his allies face a new threat from the evil Kylo Ren and his army of Stormtroopers.",
      "release_date": "2015-12-15",
      "genre_ids": [
        28,
        12,
        878,
        14
      ],
      "id": 140607,
      "original_title": "Star Wars: The Force Awakens",
      "original_language": "en",
      "title": "Star Wars: The Force Awakens",
      "backdrop_path": "/njv65RTipNSTozFLuF85jL0bcQe.jpg",
      "popularity": 9.944555,
      "vote_count": 6698,
      "video": false,
      "vote_average": 7.5
    },
    {
      "poster_path": "/rfjrAyAueCOwErk67vnkMB0Uxvj.jpg",
      "adult": false,
      "overview": "Having taken her first steps into a larger world in Star Wars: The Force Awakens (2015), Rey continues her epic journey with Finn, Poe and Luke Skywalker in the next chapter of the saga.",
      "release_date": "2017-12-13",
      "genre_ids": [
        28,
        12,
        14,
        878
      ],
      "id": 181808,
      "original_title": "Star Wars: The Last Jedi",
      "original_language": "en",
      "title": "Star Wars: The Last Jedi",
      "backdrop_path": "/c4Dw37VZjBmObmJw9bmt8IDwMZH.jpg",
      "popularity": 5.481243,
      "vote_count": 0,
      "video": false,
      "vote_average": 0
    }
  ],
  "total_results": 106,
  "total_pages": 6
};

describe('MovieSearchReducer', () => {
  it('should return the initial state', () => {
    expect(MovieSearchReducer(initialState, {})).toEqual(initialState);
  });

  it('should create results when passed MOVIE_SEARCH action', () => {
    const action = SearchActions.movieSearchSuccess(results);
    expect(MovieSearchReducer(initialState, action)).toEqual(results);
  });
});
