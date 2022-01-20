import * as React from 'react';
import { Outlet } from 'react-router-dom';
import Header from "../Header/Header"

import styled from 'styled-components';
const Container = styled.div`
    margin-top: 70px;
    margin-left: 175px;
    margin-right: 5px;
    height: auto;
    padding-top: 10px;
`;

const DashboardPage = () => {

    return(
        <>
            <Header />
            <Container>
                <Outlet />
            </Container>
        </>
    )
}
export default DashboardPage