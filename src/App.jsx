import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import './App.css';
import { CommonAll } from "./Home"
import { Authpage } from "./Auth"

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>

          <Route exact path="/"
            element={
              <PrivateRoutes><CommonAll child={"Dashbord"} /></PrivateRoutes>
            } />

          <Route exact path="/home"
            element={
              <PrivateRoutes><CommonAll child={"Dashbord"} /></PrivateRoutes>
            } />

          <Route exact path="/customers"
            element={
              <PrivateRoutes><CommonAll child={"Customers"} /></PrivateRoutes>
            } />

          <Route exact path="/login"
            element={<Authpage />} />

        </Routes>
      </Router>

    </div>
  );
}

export default App;


function PrivateRoutes({
  children,
  ...rest
}) {
  return localStorage.getItem("user") ? children : <Navigate to="/login" />;
}
