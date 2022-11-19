import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "product",
    initialState: {
        userSignData: {},
        userLoginData: {},
    },
    reducers: {
        authLogin: (state, action) => {
            state.userSignData = action.payload;
        },
        authSignin: (state, action) => {
            state.userLoginData = action.payload;
        }
    }
});


export const { authLogin, authSignin } = authSlice.actions;
export default authSlice.reducer;

