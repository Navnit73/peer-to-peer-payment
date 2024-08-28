// src/components/HomePage/HomePage.js
import React from "react";
import styled from "styled-components";

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: linear-gradient(to right, #4caf50, #009688);
  color: white;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3em;
  margin-bottom: 20px;
`;

const SubTitle = styled.h2`
  font-size: 1.5em;
  margin-bottom: 40px;
`;

const GetStartedButton = styled.button`
  padding: 15px 30px;
  font-size: 1.2em;
  color: ${(props) => props.theme.colors.primary};
  background-color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
    color: white;
  }
`;

const HomePage = () => {
  return (
    <HomeWrapper>
      <Title>Welcome to P2P Payments</Title>
      <SubTitle>Seamless and secure peer-to-peer transactions</SubTitle>
      <GetStartedButton onClick={() => window.location.href = "/dashboard"}>
        Get Started
      </GetStartedButton>
    </HomeWrapper>
  );
};

export default HomePage;
