import React, { useState } from 'react';
import styled from 'styled-components';
import { FaTimes, FaEnvelope, FaLock, FaUserCheck } from 'react-icons/fa';
import CustomButton from './CustomButton';
import { toast } from 'react-toastify';

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(11, 15, 25, 0.85);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1200;
  animation: fadeIn 0.3s ease-out;

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

const ModalContent = styled.div`
  background: var(--website-card-bg, #111827);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  width: 100%;
  max-width: 450px;
  padding: 2.5rem;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
  position: relative;
  text-align: center;
  animation: slideUp 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);

  @keyframes slideUp {
    from { transform: translateY(30px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  color: #8a99ad;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #ffffff;
    background: rgba(239, 68, 68, 0.15);
    border-color: rgba(239, 68, 68, 0.2);
    transform: rotate(90deg);
  }
`;

const Header = styled.div`
  margin-bottom: 2rem;
`;

const LogoIcon = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--website-primary, #7C3AED) 0%, var(--website-secondary, #06B6D4) 100%);
  color: #ffffff;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  box-shadow: 0 8px 16px rgba(124, 58, 237, 0.25);
`;

const Title = styled.h3`
  font-size: 1.4rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  font-size: 0.88rem;
  color: #8a99ad;
  margin-bottom: 0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: left;
`;

const Label = styled.label`
  font-size: 0.82rem;
  font-weight: 600;
  color: #cdd5e0;
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  svg {
    position: absolute;
    left: 14px;
    color: #64748B;
    font-size: 0.95rem;
  }
`;

const Input = styled.input`
  width: 100%;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 12px 14px 12px 42px;
  color: #ffffff;
  font-size: 0.95rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--website-primary, #7C3AED);
    background: rgba(255, 255, 255, 0.04);
    box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.15);
  }
`;

function CustomerLoginModal({ isOpen, onClose, onLoginSuccess }) {
  const [email, setEmail] = useState('cdmicar@gmail.com');
  const [password, setPassword] = useState('password123');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      toast.error("Please enter email and password.");
      return;
    }

    // Success simulation
    onLoginSuccess(email);
    toast.success("Login successful! Proceeding with your rental booking.");
  };

  return (
    <ModalBackdrop onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose} aria-label="Close">
          <FaTimes />
        </CloseButton>
        <Header>
          <LogoIcon>
            <FaUserCheck />
          </LogoIcon>
          <Title>Customer Sign In</Title>
          <Subtitle>Please sign in to verify your identity and finalize your reservation.</Subtitle>
        </Header>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="custLogEmail">Email Address</Label>
            <InputWrapper>
              <FaEnvelope />
              <Input 
                type="email" 
                id="custLogEmail"
                placeholder="cdmicar@gmail.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </InputWrapper>
          </FormGroup>

          <FormGroup>
            <Label htmlFor="custLogPass">Password</Label>
            <InputWrapper>
              <FaLock />
              <Input 
                type="password" 
                id="custLogPass"
                placeholder="••••••••" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </InputWrapper>
          </FormGroup>

          <CustomButton 
            type="submit"
            style={{ 
              background: 'linear-gradient(135deg, var(--website-primary, #7C3AED) 0%, var(--website-secondary, #06B6D4) 100%)', 
              border: 'none', 
              marginTop: '0.75rem',
              height: '46px'
            }}
          >
            Sign In & Continue
          </CustomButton>
        </Form>
      </ModalContent>
    </ModalBackdrop>
  );
}

export default CustomerLoginModal;
