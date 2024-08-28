import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import GlobalStyles from "./style/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./style/theme";
import Login from "./components/Auth/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import Sidebar from "./components/Layout/Sidebar";
import Header from "./components/Layout/Header";
import UserProfile from "./components/Profile/UserProfile";
import TransactionHistory from "./components/Dashboard/TransactionHistory";
import HomePage from "./components/HomePage/HomePage";

function AppContent({ profilePic, setProfilePic }) {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {!isHomePage && (
        <>
          <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
          <Header profilePic={profilePic} isSidebarOpen={isSidebarOpen} />
        </>
      )}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/profile"
          element={<UserProfile setProfilePic={setProfilePic} currentProfilePic={profilePic} />}
        />
        <Route path="/history" element={<TransactionHistory />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

function App() {
  const [profilePic, setProfilePic] = useState(null);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <AppContent profilePic={profilePic} setProfilePic={setProfilePic} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
