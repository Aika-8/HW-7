import React, { useState } from "react";
import { Button } from "./UI/Button";
import styled from "styled-components";

export const Login = ({ onShowTodo }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === "" || password.trim() === "") {
      setError("Please fill in all fields");
    } else {
      setError("");
      onShowTodo();
    }
  };
  return (
    <StyledDiv onSubmit={handleSubmit}>
      <StyledInput
        type="email"
        placeholder="Enter your email adress"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <StyledInput
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <ErrorText>{error}</ErrorText>}
      <Button variant="send" type="submit">
        Send
      </Button>
    </StyledDiv>
  );
};
const StyledDiv = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 30px 0px;
`;
const StyledInput = styled.input`
  width: 350px;
  height: 40px;
  padding-left: 10px;
  color: #6f6f6f;
  font-size: 14px;
  font-weight: 600;
  border: 3px solid brown;
  outline: none;
`;
const ErrorText = styled.p`
  color: red;
  font-size: 14px;
  font-weight: 600;
`;
