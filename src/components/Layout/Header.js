// src/components/Layout/Header.js
import React from "react";
import styled from "styled-components";
import { FaSignOutAlt } from "react-icons/fa";

// src/components/Layout/Header.js
const HeaderWrapper = styled.div`
  height: 60px;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin-left: 250px;
  transition: margin-left 0.3s ease;

  @media (max-width: 768px) {
    margin-left: 60px;
  }
`;


const ProfileInfo = styled.div`
  display: flex;
  align-items: center;
`;

const ProfilePicture = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

const UserName = styled.span`
  font-size: 1em;
  color: ${(props) => props.theme.colors.text};
`;

const LogoutButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${(props) => props.theme.colors.danger};
  font-size: 1.2em;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <ProfileInfo>
        <ProfilePicture src="https://via.placeholder.com/40" alt="Profile" />
        <UserName>John Doe</UserName>
      </ProfileInfo>
      <LogoutButton>
        <FaSignOutAlt />
      </LogoutButton>
    </HeaderWrapper>
  );
};

export default Header;
