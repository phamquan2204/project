import axios from 'axios'
import { BASE_URL, API_KEY } from './Variables.js';



class QueryServices {
    getQueryResult(query, page, mediaType) {
        return axios.get(BASE_URL + 'search/multi' + API_KEY + '&query=' + query + '&page=' + page);
    }
}

export default new QueryServices();