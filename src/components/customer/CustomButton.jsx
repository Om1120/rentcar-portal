import styled from 'styled-components';

const CustomButton = styled.button`
  background: ${props => props.outline 
    ? 'transparent' 
    : `linear-gradient(135deg, ${props.primaryColor || 'var(--website-primary, #7C3AED)'} 0%, ${props.secondaryColor || 'var(--website-secondary, #06B6D4)'} 100%)`};
  color: ${props => props.outline ? (props.textColor || 'var(--website-primary, #7C3AED)') : '#ffffff'};
  border: ${props => props.outline ? `2px solid ${props.primaryColor || 'var(--website-primary, #7C3AED)'}` : 'none'};
  padding: ${props => props.size === 'lg' ? '12px 32px' : props.size === 'sm' ? '6px 16px' : '10px 24px'};
  font-size: ${props => props.size === 'lg' ? '1.1rem' : props.size === 'sm' ? '0.85rem' : '1rem'};
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  box-shadow: ${props => props.outline ? 'none' : '0 4px 15px rgba(124, 58, 237, 0.3)'};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  text-decoration: none;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.outline 
      ? `0 4px 10px rgba(124, 58, 237, 0.15)` 
      : '0 6px 20px rgba(124, 58, 237, 0.45)'};
    background: ${props => props.outline 
      ? 'var(--website-primary, #7C3AED)' 
      : `linear-gradient(135deg, ${props.secondaryColor || 'var(--website-secondary, #06B6D4)'} 0%, ${props.primaryColor || 'var(--website-primary, #7C3AED)'} 100%)`};
    color: #ffffff;
    border-color: transparent;
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 2px 8px rgba(124, 58, 237, 0.2);
  }

  &:disabled {
    background: #cccccc;
    color: #666666;
    cursor: not-allowed;
    box-shadow: none;
    transform: none;
  }
`;

export default CustomButton;
