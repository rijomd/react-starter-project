import axios from 'axios';
import { Api } from './urlConstants';

const token = window.localStorage.getItem('token');

const axiosIntance = axios.create({
    baseURL: Api,
    headers: {
        'Authorization': token ? `${token}` : '',
    'Content-Type': 'application/json',
    }
});

export default axiosIntance;