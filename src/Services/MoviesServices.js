import axios from "axios";
import { BASE_URL, API_KEY, LANGUAGE_CODE } from './Variables.js'


class MoviesServices {
    getMovies(mediaType, movie_id) {
        return axios.get(BASE_URL + mediaType + '/' + movie_id + API_KEY)
    }

    getUpcomingMovie(mediaType, page) {
        return axios.get(BASE_URL + mediaType + '/upcoming' + API_KEY + LANGUAGE_CODE + '&page=' + page)
    }

    getTopRatedMovie(mediaType, page) {
        return axios.get(BASE_URL + mediaType + '/top_rated' + API_KEY + LANGUAGE_CODE + '&page=' + page)
    }
    getReleaseDate(mediaType, movie_id) {
        return axios.get(BASE_URL + mediaType + '/' + movie_id + '/release_dates' + API_KEY)
    }

    getMovieDetail(mediaType, movie_id, option, page) {
        return axios.get(BASE_URL + mediaType + '/' + movie_id + '/' + option + API_KEY + '&page=' + page)
    }

    getMovieWithGenres(mediaType, id, page) {
        return axios.get(BASE_URL + 'discover/' + mediaType + API_KEY + '&page=' + page)
        // https://api.themoviedb.org/3/discover/tv?api_key=<<api_key>>&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0
    }

    getMovieWithKeyword(id, page) {
        return axios.get(BASE_URL + '/keyword/' + id + '/movies' + API_KEY + LANGUAGE_CODE + '&page=' + page)
        // https://api.themoviedb.org/3/keyword/217282/tv?api_key=7a93f2bec8d7ba16f75b5ad476b26766&language=en-US
    }
}

export default new MoviesServices();
