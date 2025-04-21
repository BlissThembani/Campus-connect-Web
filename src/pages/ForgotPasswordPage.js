// src/pages/ForgotPasswordPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 1rem;
  background: linear-gradient(to right, #f5f5f5, #fff, #f5f5f5);
`;

const ForgotPasswordCard = styled.div`
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

const ResetButton = styled.button`
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

const BackToLogin = styled.div`
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

const MessageContainer = styled.div`
  padding: 1rem;
  border-radius: 4px;
  background-color: rgba(59, 191, 173, 0.1);
  color: var(--primary-color);
  margin-bottom: 1.5rem;
  text-align: center;
`;

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you would typically handle the password reset request
    console.log('Password reset requested for:', email);

    // Show success message
    setSubmitted(true);
  };

  return (
    <PageContainer>
      <ForgotPasswordCard>
        <CardTitle>Reset Password</CardTitle>
        <CardSubtitle>
          Enter your email address to receive a password reset link.
        </CardSubtitle>

        {submitted ? (
          <>
            <MessageContainer>
              Password reset instructions have been sent to your email address.
              Please check your inbox and follow the instructions.
            </MessageContainer>

            <BackToLogin>
              Remember your password?
              <Link to="/login">Back to Login</Link>
            </BackToLogin>
          </>
        ) : (
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

            <ResetButton type="submit">Send Reset Link</ResetButton>

            <BackToLogin>
              Remember your password?
              <Link to="/login">Back to Login</Link>
            </BackToLogin>
          </form>
        )}
      </ForgotPasswordCard>
    </PageContainer>
  );
};

export default ForgotPasswordPage;
