// src/components/Layout/Sidebar.js
import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FaHome, FaUser, FaHistory } from "react-icons/fa";

// src/components/Layout/Sidebar.js
const SidebarWrapper = styled.div`
  width: 250px;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.primary};
  padding: 20px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    width: 60px;
    padding: 10px;
  }
`;


const Logo = styled.h1`
  color: ${(props) => props.theme.colors.white};
  margin-bottom: 40px;
  font-size: 1.5em;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

const MenuItem = styled(NavLink)`
  color: ${(props) => props.theme.colors.white};
  text-decoration: none;
  font-size: 1.2em;
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover,
  &.active {
    background-color: ${(props) => props.theme.colors.secondary};
  }

  @media (max-width: 768px) {
    justify-content: center;
    font-size: 1.5em;
    margin-bottom: 10px;
  }
`;

const Icon = styled.span`
  margin-right: 10px;

  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <Logo>P2P</Logo>
      <MenuItem to="/dashboard" activeClassName="active">
        <Icon>
          <FaHome />
        </Icon>
        Dashboard
      </MenuItem>
      <MenuItem to="/profile" activeClassName="active">
        <Icon>
          <FaUser />
        </Icon>
        Profile
      </MenuItem>
      <MenuItem to="/history" activeClassName="active">
        <Icon>
          <FaHistory />
        </Icon>
        Transactions
      </MenuItem>
    </SidebarWrapper>
  );
};

export default Sidebar;
