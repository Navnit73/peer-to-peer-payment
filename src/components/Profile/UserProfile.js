// src/components/Profile/UserProfile.js
import React, { useState } from "react";
import styled from "styled-components";

const ProfileWrapper = styled.div`
  margin-left: 270px;
  padding: 40px;
  max-width: 600px;

  @media (max-width: 768px) {
    margin-left: 70px;
    padding: 20px;
  }
`;

const Title = styled.h1`
  margin-bottom: 20px;
  color: ${(props) => props.theme.colors.text};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
  }
`;

const UserProfile = () => {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john.doe@example.com");

  const handleUpdate = (e) => {
    e.preventDefault();
    // Handle profile update logic here
    alert("Profile updated successfully!");
  };

  return (
    <ProfileWrapper>
      <Title>User Profile</Title>
      <Form onSubmit={handleUpdate}>
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <Button type="submit">Update Profile</Button>
      </Form>
    </ProfileWrapper>
  );
};

export default UserProfile;
