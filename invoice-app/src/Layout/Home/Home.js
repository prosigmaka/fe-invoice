import * as React from 'react';
import './Home.css';
import { Routes, Route } from "react-router-dom";

import Header from "../Header/Header";
// import LoginPage from "./Layout/Login/LoginPage";
import DashboardPage from "../Dashboard/DashboardPage"
import InvoicePage from "../Invoice/InvoicePage";

import styled from 'styled-components';
const Container = styled.div`
    margin-top: 70px;
    margin-left: 175px;
    margin-right: 5px;
    height: auto;
    padding-top: 10px;
`;

function Home() {
  return (
    <div className="App">
      <Header />
      <Container>
        <Routes>
          <Route path={"/"} element={<DashboardPage/>} />
          <Route path={"/invoice"} element={<InvoicePage/>} />
        </Routes>
      </Container>
      {/* Footer */}
    </div>
  );
}

export default Home;
