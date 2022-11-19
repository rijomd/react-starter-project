import { authLogin, authSignin } from '../Reducer';
import axios from '../../../_Helpers/axios';
import { Api } from '../../../_Helpers/urlConstants';


export const login = (data) => {

    return async function saveNewTodoThunk(dispatch, getState) {

        try {
            const response = await axios.get(`${Api}/login`, {});
            if (response.status === 200) {
                dispatch(authLogin(response.data));
            }
            return response;
        } catch (err) {
            throw new Error(err);
        }

    }
};

export const signUp = (data) => {

    return async function saveNewTodoThunk(dispatch, getState) {
        try {
            const response = await axios.get(`${Api}/sign`, data);
            if (response.status === 200) {
                dispatch(authSignin(response.data));
            }
            return response;
        } catch (err) {
            throw new Error(err);
        }
    }
};