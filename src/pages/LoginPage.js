// src/pages/LoginPage.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 1rem;
  background: linear-gradient(to right, #f5f5f5, #fff, #f5f5f5);
`;

const LoginCard = styled.div`
  max-width: 450px;
  width: 100%;
  background-color: var(--white);
  border-radius: 8px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  padding: 2rem;
`;

const CardTitle = styled.h1`
  font-size: 2rem;
  color: #000;
  margin-bottom: 0.5rem;
  text-align: center;
  font-weight: 600;
`;

const CardSubtitle = styled.p`
  color: var(--dark-gray);
  text-align: center;
  margin-bottom: 2rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const InputField = styled.div`
  position: relative;

  svg {
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    color: var(--dark-gray);
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem 1rem 1rem 2.5rem;
  border: 1px solid var(--medium-gray);
  border-radius: 4px;
  font-size: 1rem;
  background-color: #f9f9f9;

  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }

  &::placeholder {
    color: #bbb;
  }
`;

const ForgotPassword = styled.div`
  text-align: right;
  margin-bottom: 1.5rem;

  a {
    color: var(--primary-color);
    font-size: 0.875rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const LoginButton = styled.button`
  width: 100%;
  padding: 1rem;
  background-color: var(--primary-color);
  color: var(--white);
  border-radius: 4px;
  font-weight: 500;
  font-size: 1rem;
  margin-bottom: 1.5rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(59, 191, 173, 0.8);
  }
`;

const SignupPrompt = styled.div`
  text-align: center;
  color: var(--dark-gray);
  font-size: 0.875rem;

  a {
    color: var(--primary-color);
    font-weight: 500;
    margin-left: 0.5rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you would typically handle authentication
    console.log('Login attempted with:', email, password);

    // For demo purposes, just navigate to home
    navigate('/');
  };

  return (
    <PageContainer>
      <LoginCard>
        <CardTitle>Access Account</CardTitle>
        <CardSubtitle>
          Access your account to manage bookings and view timetables.
        </CardSubtitle>

        <form onSubmit={handleSubmit}>
          <FormGroup>
            <InputField>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </InputField>
          </FormGroup>

          <FormGroup>
            <InputField>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <Input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </InputField>
          </FormGroup>

          <ForgotPassword>
            <Link to="/forgot-password">Forgot your password?</Link>
          </ForgotPassword>

          <LoginButton type="submit">Log In</LoginButton>

          <SignupPrompt>
            Need to create an account?
            <Link to="/signup">Sign Up</Link>
          </SignupPrompt>
        </form>
      </LoginCard>
    </PageContainer>
  );
};

export default LoginPage;
