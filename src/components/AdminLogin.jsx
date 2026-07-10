import React, { useState } from 'react';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { FaLock, FaEnvelope, FaCarSide } from 'react-icons/fa';

const LoginContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0F172A;
  padding: 20px;
  font-family: 'Inter', sans-serif;
  transition: all 0.3s ease;
`;

const LoginCard = styled.div`
  width: 100%;
  max-width: 420px;
  background: rgba(30, 41, 59, 0.45);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 24px;
  padding: 40px 30px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.35);
  text-align: center;
`;

const LogoContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 16px;
  background: linear-gradient(135deg, #7C3AED 0%, #06B6D4 100%);
  color: #ffffff;
  font-size: 1.8rem;
  margin-bottom: 20px;
  box-shadow: 0 8px 16px rgba(124, 58, 237, 0.3);
`;

const Title = styled.h2`
  font-size: 1.6rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 8px;
`;

const Subtitle = styled.p`
  font-size: 0.88rem;
  color: #94A3B8;
  margin-bottom: 30px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InputGroup = styled.div`
  position: relative;
  text-align: left;
`;

const InputLabel = styled.label`
  font-size: 0.8rem;
  font-weight: 600;
  color: #94A3B8;
  margin-bottom: 6px;
  display: block;
`;

const InputWrapper = styled.div`
  position: relative;
  
  svg {
    position: absolute;
    left: 14px;
    top: 50%;
    transform: translateY(-50%);
    color: #64748B;
    font-size: 1rem;
    transition: all 0.3s ease;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 12px 14px 12px 42px;
  background: rgba(15, 23, 42, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  color: #ffffff;
  font-size: 0.95rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #7C3AED;
    background: rgba(15, 23, 42, 0.8);
    box-shadow: 0 0 0 4px rgba(124, 58, 237, 0.15);
    
    & + svg {
      color: #7C3AED;
    }
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(135deg, #7C3AED 0%, #06B6D4 100%);
  color: #ffffff;
  border: none;
  border-radius: 12px;
  padding: 14px;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 20px rgba(124, 58, 237, 0.25);
  margin-top: 10px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 24px rgba(124, 58, 237, 0.4);
    filter: brightness(1.1);
  }

  &:active {
    transform: translateY(0);
  }
`;

function AdminLogin({ onLoginSuccess, darkMode }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      toast.warn("Please enter both email and password.");
      return;
    }

    if (email === 'omtank1754@gmail.com' && password === 'omtank007') {
      localStorage.setItem('isAdminAuthenticated', 'true');
      onLoginSuccess();
      toast.success("Welcome back, Om! Login successful.", { icon: "🔐" });
    } else {
      toast.error("Invalid admin email or password!");
    }
  };

  return (
    <LoginContainer darkMode={darkMode}>
      <LoginCard darkMode={darkMode}>
        <LogoContainer>
          <FaCarSide />
        </LogoContainer>
        <Title darkMode={darkMode}>DriveX Admin Portal</Title>
        <Subtitle darkMode={darkMode}>Sign in with your administrator credentials to access dashboard logs and controls.</Subtitle>
        
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <InputLabel darkMode={darkMode}>Email Address</InputLabel>
            <InputWrapper>
              <StyledInput 
                type="email" 
                placeholder="admin@drivex.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                darkMode={darkMode}
                required
              />
              <FaEnvelope />
            </InputWrapper>
          </InputGroup>

          <InputGroup>
            <InputLabel darkMode={darkMode}>Password</InputLabel>
            <InputWrapper>
              <StyledInput 
                type="password" 
                placeholder="••••••••" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                darkMode={darkMode}
                required
              />
              <FaLock />
            </InputWrapper>
          </InputGroup>

          <SubmitButton type="submit">Sign In</SubmitButton>
        </Form>
      </LoginCard>
    </LoginContainer>
  );
}

export default AdminLogin;
