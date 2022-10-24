import Cookies from "js-cookie";
import qs, { stringify } from 'qs';

const BASEAPI = '';
const apiFetchPost = async (endpoint, body) => {
  if (!body.token) {
    let token = Cookies.get('token');
    if (token) {
      body.token = token;
    }
  }
  const res = await fetch(BASEAPI + endpoint, {
    method: 'POST',
    headers: {
      'Accept': 'Application/json',
      'Content-type': 'Application/json'
    },
    body: JSON.stringify(body)
  });
  const json = await res.json();
}

const shopAPI = {
  login: async (email, password) => {
    //chamada API - backend
     return { error: 'nao foi feito o login' };
  }
 
}
export default () => shopAPI;
