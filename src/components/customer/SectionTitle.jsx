import React from 'react';
import styled from 'styled-components';

const TitleContainer = styled.div`
  text-align: ${props => props.align || 'center'};
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  align-items: ${props => props.align === 'left' ? 'flex-start' : props.align === 'right' ? 'flex-end' : 'center'};
`;

const MainTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: 800;
  color: inherit;
  position: relative;
  padding-bottom: 12px;
  margin-bottom: 10px;
  letter-spacing: -0.5px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: ${props => props.align === 'left' ? '0' : props.align === 'right' ? 'auto' : '50%'};
    right: ${props => props.align === 'right' ? '0' : 'auto'};
    transform: ${props => props.align === 'left' || props.align === 'right' ? 'none' : 'translateX(-50%)'};
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, var(--website-primary, #7C3AED) 0%, var(--website-secondary, #06B6D4) 100%);
    border-radius: 2px;
  }
`;

const Subtitle = styled.p`
  font-size: 1.05rem;
  color: #8a99ad;
  max-width: 600px;
  line-height: 1.5;
  margin: 0;
`;

function SectionTitle({ title, subtitle, align }) {
  return (
    <TitleContainer align={align}>
      <MainTitle align={align}>{title}</MainTitle>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </TitleContainer>
  );
}

export default SectionTitle;
