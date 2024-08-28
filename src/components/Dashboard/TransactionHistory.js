// src/components/Dashboard/TransactionHistory.js
import React from "react";
import styled from "styled-components";

const HistoryWrapper = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  margin-bottom: 20px;
  color: #333;
`;

const TransactionItem = styled.div`
  padding: 15px 0;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:last-child {
    border-bottom: none;
  }
`;

const TransactionDetails = styled.div`
  color: #333;
`;

const TransactionAmount = styled.div`
  color: ${(props) => (props.type === "credit" ? "#4caf50" : "#f44336")};
  font-weight: bold;
`;

const TransactionHistory = () => {
  // Example transactions
  const transactions = [
    { id: 1, details: "Payment to John Doe", amount: "-$200.00", type: "debit" },
    { id: 2, details: "Payment received from Alice", amount: "+$500.00", type: "credit" },
    // Add more transactions here
  ];

  return (
    <HistoryWrapper>
      <Title>Transaction History</Title>
      {transactions.map((transaction) => (
        <TransactionItem key={transaction.id}>
          <TransactionDetails>{transaction.details}</TransactionDetails>
          <TransactionAmount type={transaction.type}>{transaction.amount}</TransactionAmount>
        </TransactionItem>
      ))}
    </HistoryWrapper>
  );
};

export default TransactionHistory;
