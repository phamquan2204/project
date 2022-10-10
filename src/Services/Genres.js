import axios from 'axios';
import { BASE_URL, API_KEY, LANGUAGE_CODE } from './Variables.js';


class Genres {
    getGenres(mediaType) {
        return axios.get(BASE_URL + 'genre/' + mediaType + '/list' + API_KEY + LANGUAGE_CODE)
    }
}
export default new Genres();
