// src/components/Dashboard/Dashboard.js
import React from "react";
import styled from "styled-components";
import TransferMoney from "./TransferMoney";
import TransactionHistory from "./TransactionHistory";

const DashboardWrapper = styled.div`
  padding: 40px;
  max-width: 1200px;
  margin: auto;
`;

const BalanceBox = styled.div`
  background-color: #4caf50;
  color: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  margin-bottom: 40px;
  font-size: 24px;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  color: #333;
`;

const Dashboard = () => {
  return (
    <DashboardWrapper>
      <Title>Dashboard</Title>
      <BalanceBox>Your Balance: $5,000.00</BalanceBox>
      <TransferMoney />
      <TransactionHistory />
    </DashboardWrapper>
  );
};

export default Dashboard;
