const TMDB_API = "http://localhost/3/";
const SEARCH_API = `${TMDB_API}search/`;

export default {
  appSettings: {

  },
  endpoints: {
    MOVIE_SEARCH_API: `${SEARCH_API}movie?api_key=`,
    PEOPLE_SEARCH_API: `${SEARCH_API}person?api_key=`,
    TVSHOW_SEARCH_API: `${SEARCH_API}tv?api_key=`,
    TMDB_CONFIGURATION_API: `${TMDB_API}configuration?api_key=`,
    ISO639_1_SRC: "http://localhost/MovieDB/language-codes/r/language-codes.php",
    ISO3166_1_SRC: "http://localhost/MovieDB/data/core/country-list/r/data.php"
  }
};
