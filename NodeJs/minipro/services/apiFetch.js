'use strict';

const axios = require('axios');


//axios.defaults.baseURL = 'https://remoteok.io/';
axios.defaults.maxRedirects=0;
axios.interceptors.response.use(
  response => response,
  error => {
    console.error(`Error ${JSON.stringify(error.response)}`)
    if (error.response && [301, 302].includes(error.response.status)) {
      const redirectUrl = error.response.headers.location;
      return axios.get(redirectUrl);
    }
    return Promise.reject(error);
  }
);
async function get() {
  try {
    console.log('Fetching from server...');
    const response = await axios.get('https://remoteok.io/api/');
    console.log('Fetching from server...');
    console.log('Response status: ');
    console.log(response.status, response.statusText);

    if (response.status === 200) {
        console.log('Legal Notice: ', response.data[0].legal);
    }
    if (response.status >= 400 && response.status < 500) {
        console.error('Maybe the API has changed?');
    }
    if (response.status >= 500) {
        console.error('There seems to be a problem with the server,');
        console.error('Try again later.');
    }
    return response;
  } catch (error) {
    console.log(`Axios error ${error}`);
    if (error.code === 'ENOTFOUND') {
      console.error(`Could not connect to the host: ${error.config.url}`);
    }
  }
}

module.exports = {
  get
}
