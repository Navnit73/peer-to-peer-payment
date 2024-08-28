import React from "react";
import styled from "styled-components";
import { FiBell, FiUser } from "react-icons/fi";

const HeaderWrapper = styled.div`
  height: 60px;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  transition: margin-left 0.3s ease;
  margin-left: ${({ isSidebarOpen }) => (isSidebarOpen ? "250px" : "0")};

  @media (max-width: 768px) {
    margin-left: ${({ isSidebarOpen }) => (isSidebarOpen ? "200px" : "0")};
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.primary};
`;

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
`;

const ProfilePicture = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  margin-left: 20px;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const NotificationIcon = styled.div`
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.text};
  margin-left: 20px;
  cursor: pointer;
`;

function Header({ profilePic, isSidebarOpen }) {
  const [notifications] = React.useState([/* Dummy notifications data */]);

  return (
    <HeaderWrapper isSidebarOpen={isSidebarOpen}>
      <Logo>YourApp</Logo>
      <HeaderActions>
        <ProfilePicture>
          {profilePic ? (
            <img src={profilePic} alt="Profile" />
          ) : (
            <FiUser style={{ fontSize: "1.5rem" }} />
          )}
        </ProfilePicture>
        <NotificationIcon>
          <FiBell />
          {notifications.length > 0 && (
            <span
              style={{
                position: "absolute",
                top: "10px",
                right: "20px",
                backgroundColor: "red",
                color: "white",
                borderRadius: "50%",
                padding: "2px 5px",
                fontSize: "12px",
              }}
            >
              {notifications.length}
            </span>
          )}
        </NotificationIcon>
      </HeaderActions>
    </HeaderWrapper>
  );
}

export default Header;
