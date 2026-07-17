import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaGasPump, FaChair, FaCog } from 'react-icons/fa';
import CustomButton from './CustomButton';

const Card = styled.div`
  background: var(--website-card-bg, #111827);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
    border-color: rgba(124, 58, 237, 0.25);

    .car-image {
      transform: scale(1.06);
    }
  }
`;

const ImageContainer = styled.div`
  position: relative;
  height: 200px;
  overflow: hidden;
  background: #0b0f19;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
`;

const CarImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  transition: transform 0.5s ease;
`;

const CategoryBadge = styled.span`
  background: linear-gradient(135deg, var(--website-primary, #7C3AED) 0%, var(--website-secondary, #06B6D4) 100%);
  color: #ffffff;
  padding: 4px 12px;
  font-size: 0.72rem;
  font-weight: 700;
  border-radius: 20px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 4px 10px rgba(124, 58, 237, 0.2);
`;

const StatusBadge = styled.span`
  background: ${props => props.status === 'Available' ? 'rgba(16, 185, 129, 0.15)' : props.status === 'Booked' ? 'rgba(59, 130, 246, 0.15)' : 'rgba(239, 68, 68, 0.15)'};
  color: ${props => props.status === 'Available' ? '#10b981' : props.status === 'Booked' ? '#3b82f6' : '#ef4444'};
  border: 1px solid ${props => props.status === 'Available' ? '#10b981' : props.status === 'Booked' ? '#3b82f6' : '#ef4444'};
  padding: 4px 10px;
  font-size: 0.68rem;
  font-weight: 700;
  border-radius: 20px;
  text-transform: uppercase;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  padding-top: 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
`;

const Content = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const CarName = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: inherit;
  margin-bottom: 0.5rem;
`;

const PriceRow = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 1.2rem;
`;

const PriceVal = styled.span`
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--website-secondary, #06B6D4);
`;

const PriceLabel = styled.span`
  font-size: 0.85rem;
  color: #8a99ad;
  margin-left: 4px;
`;

const SpecsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  padding: 1rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  margin-bottom: 1.5rem;
`;

const SpecItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  color: #8a99ad;
  font-size: 0.78rem;

  svg {
    font-size: 1rem;
    color: var(--website-primary, #7C3AED);
  }
`;

const SpecValue = styled.span`
  font-weight: 600;
  color: inherit;
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 10px;
  margin-top: auto;
`;

function CustomerCarCard({ car, onRent, showRentButton = true }) {
  const { id, name, type, pricePerDay, status, image, fuel, transmission } = car;
  
  // Parse category (SUV, Sedan, Sports, Luxury)
  const category = type.includes('SUV') ? 'SUV' : type.includes('Sedan') ? 'Sedan' : type.includes('Sports') || type.includes('Coupe') ? 'Sports' : 'Luxury';

  return (
    <Card>
      <ImageContainer>
        <CarImage className="car-image" src={image} alt={name} />
      </ImageContainer>
      <Content>
        <CarName>{name}</CarName>
        <PriceRow>
          <PriceVal>₹{pricePerDay.toLocaleString()}</PriceVal>
          <PriceLabel>/ Day</PriceLabel>
        </PriceRow>
        <SpecsGrid>
          <SpecItem>
            <FaGasPump />
            <SpecValue>{fuel}</SpecValue>
          </SpecItem>
          <SpecItem>
            <FaCog />
            <SpecValue>{transmission}</SpecValue>
          </SpecItem>
          <SpecItem>
            <FaChair />
            <SpecValue>5 Seats</SpecValue>
          </SpecItem>
        </SpecsGrid>
        <ButtonRow>
          <Link to={`/cars/${id}`} style={{ flex: 1, textDecoration: 'none' }}>
            <CustomButton outline size="sm" style={{ width: '100%' }}>Details</CustomButton>
          </Link>
          {showRentButton && (
            <CustomButton 
              size="sm" 
              style={{ flex: 1.2 }}
              disabled={status !== 'Available'}
              onClick={() => onRent && onRent(car)}
            >
              Rent
            </CustomButton>
          )}
        </ButtonRow>
        <CardFooter>
          <CategoryBadge>{category}</CategoryBadge>
          <StatusBadge status={status}>{status}</StatusBadge>
        </CardFooter>
      </Content>
    </Card>
  );
}

export default CustomerCarCard;
