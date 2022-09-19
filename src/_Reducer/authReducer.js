import { authconstants } from '../_Constants'
const initState = {
    token: "",
    user: "",
    message: '',
    authenticating: false
};

export const authReducer = (state = initState, action) => {
    switch (action.type) {
        case authconstants.LOGIN_REQUEST:
            state = {
                ...state,
                authenticating: true
            }
            break;
        case authconstants.LOGIN_FAILURE:
            state = {
                ...state,
                message: action.payload.err,
                authenticating: false
            }
            break;
        case authconstants.LOGIN_SUCCESS:
            state = {
                ...state,
                user: action.user,
                token: action.token,
                message: "Success",
                authenticating: false
            }
            break;
    }
    return state;
}