import * as React from 'react';
import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./Layout/Header/Header";
import Login from "../src/pages/Login/Form"
import Home from "../src/pages/Home/Home"
import InvoicePage from "./Layout/Invoice/InvoicePage";
import InvoiceForm from './Layout/Invoice/InvoiceForm';

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
          <Route exact path="/" element={<Navigate to="/login" />} />
          <Route exact path={"/login"} element={<Login/>} />
          <Route path={"/dashboard"} element={<Home/>} />
          <Route path={"/invoice"} element={<InvoicePage/>} />
          <Route path={"/create-invoice"} element={<InvoiceForm/>} />
        </Routes>
      </Container>
      {/* Footer */}
    </div>
  );
}

export default App;
