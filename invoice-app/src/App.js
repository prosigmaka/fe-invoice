import * as React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";

import Header from "./Layout/Header/Header";
import LoginPage from "./Layout/Login/LoginPage";
import DashboardPage from "./Layout/Dashboard/DashboardPage";
import InvoicePage from "./Layout/Invoice/InvoicePage";

import styled from 'styled-components';
const Container = styled.div`
    margin-top: 70px;
    margin-left: 175px;
    margin-right: 5px;
    height: auto;
    padding-top: 10px;
`;

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <Routes>
          <Route exact path={"/"} element={<LoginPage/>} />
          <Route path={"/dashboard"} element={<DashboardPage/>} />
          <Route path={"/invoice"} element={<InvoicePage/>} />
        </Routes>
      </Container>
      {/* Footer */}
    </div>
  );
}

export default App;
