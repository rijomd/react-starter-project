import React, { useState } from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';

import '../Style/auth.css';

import { Login } from "./login";
import { SignUp } from "./sign";


export const Authpage = () => {
    const [islogin, setLogin] = useState(true);
    const onSignupPage = () => {
        setLogin(false)
    }
    const onLoginPage = () => {
        setLogin(true)
    }
    return (
        <Grid container className='logn_page'>
            <CssBaseline />
            <Grid
                item
                xs={false}
                sm={4}
                md={7}
                sx={{
                    backgroundImage: 'url(https://source.unsplash.com/random)',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: (t) =>
                        t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />

            {islogin && <Login
                islogin={islogin}
                onSignupPage={onSignupPage}
            />}
            {!islogin && <SignUp
                islogin={islogin}
                onLoginPage={onLoginPage}
            />}
        </Grid>

    );
}