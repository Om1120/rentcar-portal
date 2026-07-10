import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: var(--website-card-bg, #111827);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 2.5rem 2rem;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  overflow: hidden;
  height: 100%;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, var(--website-primary, #7C3AED) 0%, var(--website-secondary, #06B6D4) 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
    border-color: rgba(255, 255, 255, 0.1);

    &::before {
      opacity: 1;
    }

    .icon-wrapper {
      background: linear-gradient(135deg, var(--website-primary, #7C3AED) 0%, var(--website-secondary, #06B6D4) 100%);
      color: #ffffff;
      transform: scale(1.1);
    }
  }
`;

const IconWrapper = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: rgba(124, 58, 237, 0.1);
  color: var(--website-primary, #7C3AED);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
`;

const Title = styled.h4`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: inherit;
`;

const Description = styled.p`
  font-size: 0.95rem;
  color: #8a99ad;
  line-height: 1.6;
  margin: 0;
`;

function FeatureCard({ icon: Icon, title, description }) {
  return (
    <Card>
      <IconWrapper className="icon-wrapper">
        <Icon />
      </IconWrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Card>
  );
}

export default FeatureCard;
