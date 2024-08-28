// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyles from "./style/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./style/theme";
import Login from "./components/Auth/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import Sidebar from "./components/Layout/Sidebar";
import Header from "./components/Layout/Header";
import UserProfile from "./components/Profile/UserProfile";
import TransactionHistory from "./components/Dashboard/TransactionHistory";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Sidebar />
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/history" element={<TransactionHistory />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
