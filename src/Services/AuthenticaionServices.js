import { BASE_URL, API_KEY } from './Variables.js';
import axios from 'axios';

class AuthenticaionServices {
    createRequestToken() {
        return axios.get(`${BASE_URL}authentication/token/new${API_KEY}`)
        // https://api.themoviedb.org/3/authentication/token/new?api_key=<<api_key>>
    }

    createGuestToken() {
        return axios.get(`${BASE_URL}authentication/guest_session/new${API_KEY}`)
        // https://api.themoviedb.org/3/authentication/guest_session/new?api_key=<<api_key>>
    }
    createSessions(request_token) {
        const URL = `${BASE_URL}authentication/session/new${API_KEY}`
        return axios.post(URL, JSON.stringify(request_token))
    }
}

export default new AuthenticaionServices();
