import * as React from 'react';
import Button from '@mui/material/Button';


const LoginPage = () => {
    const handleLogin = () => {
        window.location.pathname = "/dashboard";
    }
    return(
        <>
        <h3>Login Page</h3>
        <Button variant="contained" component="span"
        onClick={handleLogin}
        >
            Login
        </Button>
        </>
    )
}
export default LoginPage