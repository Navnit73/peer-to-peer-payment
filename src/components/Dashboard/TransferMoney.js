// src/components/Dashboard/TransferMoney.js
import React from "react";
import styled from "styled-components";

const TransferWrapper = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 40px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  color: #333;
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

const TransferMoney = () => {
  return (
    <TransferWrapper>
      <Title>Transfer Money</Title>
      <form>
        <Input type="text" placeholder="Recipient's Email" required />
        <Input type="number" placeholder="Amount" required />
        <Button type="submit">Transfer</Button>
      </form>
    </TransferWrapper>
  );
};

export default TransferMoney;
