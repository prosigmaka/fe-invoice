import * as React from 'react';
import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../src/pages/Login/Form"
import Home from "../src/pages/Home/Home"
import InvoicePage from "./Layout/Invoice/InvoicePage";
import InvoiceForm from './Layout/Invoice/InvoiceForm';
import DashboardPage from './Layout/Dashboard/DashboardPage';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path={"/login"} element={<Login/>} />
          <Route path={"/dashboard"} element={<DashboardPage/>} >
            <Route path={"home"} element={<Home/>} />
            <Route path={"invoice"} element={<InvoicePage/>} />
            <Route path={"create-invoice"} element={<InvoiceForm/>} /> 
          </Route>
        </Routes>
    </div>
  );
}

export default App;
