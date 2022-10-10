import axios from 'axios'

import { BASE_URL, API_KEY } from './Variables.js'


class TrendingServices {
    getTrending(media_type, time_window, page) {
        return axios.get(BASE_URL + '/trending/' + media_type + '/' + time_window + API_KEY+ '&page=' + page)
    }

    getPopular(media_type, page) {
        return axios.get(BASE_URL + media_type + '/popular/' + API_KEY + '&page=' + page)

    }
}



export default new TrendingServices();