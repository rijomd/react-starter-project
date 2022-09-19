import { userconstants } from '../_Constants'
const initState = {
    isSighnup: false,
    userSignData: {},
    message: "",
};

export const userReducer = (state = initState, action) => {
    switch (action.type) {
        case userconstants.SIGHNUP_REQUEST:
            state = {
                ...state,
                isSighnup: true
            }
            break;

        case userconstants.SIGHNUP_SUCCESS:
            state = {
                ...state,
                isSighnup: false,
                message: "Succesfully Registered!",
            }
            break;

        case userconstants.SIGHNUP_FAILURE:
            state = {
                ...state,
                isSighnup: false,
                userSignData: {},
                message: action.payload,
            }
            break;
    }
    return state;
}