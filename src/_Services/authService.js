import axios from '../_Helpers/axios';

const callBackResponse = (response) => {
    console.log(response.data, "data");
    if (response.data && response.data.error_code !== 0) {
        const error = response && response.data.message;
        return Promise.reject(error);
    }
    return response.data;
}

const login = async (data) => {
    return axios.post("/login", data).then(callBackResponse);
}

const signUp = async (data) => {
    return axios.post("/signUp", data).then(callBackResponse);
}

export const authService = {
    login, signUp
}