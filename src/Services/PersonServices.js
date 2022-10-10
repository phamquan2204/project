import axios from "axios";
import { BASE_URL, API_KEY, LANGUAGE_CODE } from './Variables.js'


class PersonServices {
    getPersonDetail(id) {
        return axios.get(BASE_URL + 'person/' + id + API_KEY)
        //https://api.themoviedb.org/3/person/{person_id}?api_key=<<api_key>>&language=en-US
    }
    getPersonCredit(mediaType, id) {
        return axios.get(`https://api.themoviedb.org/3/person/${id}/${mediaType}?api_key=7a93f2bec8d7ba16f75b5ad476b26766&language=en-US`)
        // return axios.get(BASE_URL + 'person/' + id + '/' + mediaType + API_KEY + LANGUAGE_CODE)
        //https://api.themoviedb.org/3/person/11701/movie_credits?api_key=7a93f2bec8d7ba16f75b5ad476b26766&language=en-US
    }

}

export default new PersonServices();