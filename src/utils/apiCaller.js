import axios from 'axios';
import * as Config from './../constants/Config';

export default function callApi(endpoint, method = 'GET', body) {
  return axios({method: method, url: `${Config.URL_API}/${endpoint}` , data : body} ).catch((error) => {
    console.log(error);
  })
}