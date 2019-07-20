import axios from 'axios';
import * as config from './../constants/config';

export default function callApi(endpoin, method = 'GET', body) {
    return axios({
        method,
        url: `${config.API_URL}/${endpoin}`,
        data: body 
    }).catch(err => {
        console.log(err);
    })
}