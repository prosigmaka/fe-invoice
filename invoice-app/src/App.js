import * as React from 'react';
import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./Layout/Header/Header";
import Login from "../src/pages/Login/Form"
import Home from "../src/pages/Home/Home"
import InvoicePage from "./Layout/Invoice/InvoicePage";
import InvoiceForm from './Layout/Invoice/InvoiceForm';

import styled from 'styled-components';
import DashboardPage from './Layout/Dashboard/DashboardPage';
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
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path={"/login"} element={<Login/>} />
          <Route path={"/dashboard"} element={<DashboardPage/>} >
            <Route path={"home"} element={<Home/>} />
            <Route path={"invoice"} element={<InvoicePage/>} />
          </Route>
          <Route path={"/create-invoice"} element={<InvoiceForm/>} />
        </Routes>
      </Container>
      {/* Footer */}
    </div>
  );
}

export default App;
