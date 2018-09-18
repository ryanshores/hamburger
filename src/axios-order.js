import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-ae498.firebaseio.com/'
});

export default instance;