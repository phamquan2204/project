import React from 'react';
import axios from 'axios';
import { BASE_URL, API_KEY } from './Variables.js';


class CompaniesService {
    getCompaniesDetail(company_id) {
        return axios.get(BASE_URL + 'company/' + company_id + API_KEY)
    }

    getCompaniesAlternativeNames(company_id) {
        return axios.get(BASE_URL + 'company/' + company_id + '/alternative_names' + API_KEY)
    }

    getCompaniesImages(company_id){
        return axios.get(BASE_URL + 'company/' + company_id + '/images' + API_KEY)
    }
}


export default new CompaniesService();