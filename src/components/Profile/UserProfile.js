// src/components/Profile/UserProfile.js
import React, { useState } from "react";
import styled from "styled-components";

const UserProfileWrapper = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
`;

const ProfilePicContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProfilePic = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 20px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const InputGroup = styled.div`
  margin-bottom: 15px;

  label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }

  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
`;

const UserProfile = ({ setProfilePic, currentProfilePic }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const handleProfileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const newProfilePic = URL.createObjectURL(file);
      setProfilePic(newProfilePic);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, address, phone });
  };

  return (
    <UserProfileWrapper>
      <h2>Update Profile</h2>
      <ProfilePicContainer>
        <ProfilePic>
          <img src={currentProfilePic || "default-profile-pic.png"} alt="Profile" />
        </ProfilePic>
        <input
          type="file"
          accept="image/*"
          id="profile-upload"
          onChange={handleProfileUpload}
        />
        <label htmlFor="profile-upload">
          <button>Change Profile Picture</button>
        </label>
      </ProfilePicContainer>
      <form onSubmit={handleSubmit}>
        <InputGroup>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </InputGroup>
        <InputGroup>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </InputGroup>
        <InputGroup>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your address"
          />
        </InputGroup>
        <InputGroup>
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter your phone number"
          />
        </InputGroup>
        <button type="submit">Save Changes</button>
      </form>
    </UserProfileWrapper>
  );
};

export default UserProfile;
