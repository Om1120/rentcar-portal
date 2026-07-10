import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: var(--website-card-bg, #111827);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  height: 100%;

  &:hover {
    transform: translateY(-5px);
    border-color: var(--website-primary, #7C3AED);
    box-shadow: 0 8px 24px rgba(124, 58, 237, 0.15);
  }
`;

const StatValue = styled.h3`
  font-size: 2.8rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, var(--website-primary, #7C3AED) 0%, var(--website-secondary, #06B6D4) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
`;

const StatTitle = styled.p`
  font-size: 0.9rem;
  color: #8a99ad;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 0;
`;

function StatsCard({ value, title }) {
  return (
    <Card>
      <StatValue>{value}</StatValue>
      <StatTitle>{title}</StatTitle>
    </Card>
  );
}

export default StatsCard;
