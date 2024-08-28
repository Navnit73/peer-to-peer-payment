// src/components/Auth/Login.js
import React from "react";
import styled from "styled-components";

const LoginWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #e9ecef;
`;

const LoginBox = styled.div`
  background-color: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  color: #333;
  text-align: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }
`;

const Login = () => {
  return (
    <LoginWrapper>
      <LoginBox>
        <Title>Login</Title>
        <form>
          <Input type="email" placeholder="Email" required />
          <Input type="password" placeholder="Password" required />
          <Button type="submit">Login</Button>
        </form>
      </LoginBox>
    </LoginWrapper>
  );
};

export default Login;
