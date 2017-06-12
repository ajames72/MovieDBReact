const TMDB_API = "https://api.themoviedb.org/3/";
const SEARCH_API = `${TMDB_API}search/`;

export default {
  appSettings: {

  },
  endpoints: {
    MOVIE_SEARCH_API: `${SEARCH_API}movie?api_key=`,
    PEOPLE_SEARCH_API: `${SEARCH_API}person?api_key=`,
    TMDB_CONFIGURATION_API: `${TMDB_API}configuration?api_key=`,
    ISO639_1_SRC: "http://data.okfn.org/data/core/language-codes/r/language-codes.json",
    ISO3166_1_SRC: "http://data.okfn.org/data/core/country-list/r/data.json"
  }
};
