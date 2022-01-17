import * as React from 'react';
import Button from '@mui/material/Button';

const DashboardPage = () => {
    const handleLogout = () => {
        window.location.pathname = "/";
    }
    return(
        <>
        <h3>Dashboard Page</h3>
        <Button variant="contained" component="span"
        onClick={handleLogout}
        >
            Logout
        </Button>
        </>
    )
}
export default DashboardPage