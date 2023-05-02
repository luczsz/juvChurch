import axios from 'axios';

const api = axios.create({
    baseURL: 'https://www.abibliadigital.com.br/api/'
})

export default api;
