// src/components/Layout/MainContent.js
import styled from "styled-components";

const MainContent = styled.div`
  margin-left: 270px;
  padding: 20px;
  transition: margin-left 0.3s ease;

  @media (max-width: 768px) {
    margin-left: 70px;
  }
`;

export default MainContent;
