// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyles from "./style/GlobalStyles"
import Login from "./components/Auth/Login";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
