import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaGasPump, FaChair, FaCog, FaCalendarAlt, FaCheckCircle } from 'react-icons/fa';
import CustomButton from '../../components/customer/CustomButton';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 5rem 24px;
`;

const BackLink = styled(Link)`
  color: var(--website-secondary, #06B6D4);
  font-weight: 600;
  text-decoration: none;
  margin-bottom: 2rem;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s ease;

  &:hover {
    color: var(--website-primary, #7C3AED);
    transform: translateX(-3px);
  }
`;

const DetailGrid = styled.div`
  display: grid;
  grid-template-columns: 1.25fr 1fr;
  gap: 60px;
  align-items: start;

  @media (max-width: 991.98px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const ImageCard = styled.div`
  background: #0b0f19;
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 24px;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 450px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);

  @media (max-width: 575.98px) {
    height: 300px;
    padding: 1rem;
  }
`;

const CarImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const InfoCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  color: inherit;
  margin: 0;
`;

const CategoryBadge = styled.span`
  background: rgba(124, 58, 237, 0.15);
  color: var(--website-primary, #7C3AED);
  border: 1px solid rgba(124, 58, 237, 0.25);
  padding: 6px 16px;
  font-size: 0.8rem;
  font-weight: 700;
  border-radius: 50px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  align-self: flex-start;
  margin-top: 5px;
`;

const PriceBox = styled.div`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PriceLeft = styled.div`
  display: flex;
  flex-direction: column;
`;

const PriceLabel = styled.span`
  font-size: 0.85rem;
  color: #8a99ad;
`;

const PriceValue = styled.h2`
  font-size: 2.2rem;
  font-weight: 800;
  color: var(--website-secondary, #06B6D4);
  margin: 0;
`;

const SpecsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

const SpecCard = styled.div`
  background: var(--website-card-bg, #111827);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 1.2rem;
  display: flex;
  align-items: center;
  gap: 15px;

  svg {
    font-size: 1.4rem;
    color: var(--website-primary, #7C3AED);
  }
`;

const SpecDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const SpecLabel = styled.span`
  font-size: 0.75rem;
  color: #8a99ad;
`;

const SpecValue = styled.span`
  font-size: 0.95rem;
  font-weight: 700;
  color: inherit;
`;

const FeaturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const SubTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.95rem;
  color: #b3c5df;

  svg {
    color: #10b981;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: #8a99ad;
  margin: 0;
`;

const defaultDescriptions = {
  Sports: "Experience raw track-inspired thrills and blistering acceleration in this elite performance machine. Perfect for drivers who command control and presence.",
  SUV: "Dominate all terrains with unmatched passenger room, premium comfort, and robust mechanical engineering. An ideal companion for long journeys and family travel.",
  Sedan: "Savor quiet prestige, silky power delivery, and state-of-the-art tech features. Designed for corporate clients and long-distance business transfers.",
  Luxury: "The ultimate representation of executive class. Handcrafted detailing and refined luxury suspension to isolate you from the road."
};

const defaultFeatures = [
  'Pre-Collision Assist',
  'Adaptive Cruise Control',
  'Panoramic Sunroof',
  'Premium Sound System',
  'Heated Leather Seats',
  'Smart Navigation HUD',
  '360° Backup Camera',
  'Ambient Lighting Control'
];

function CarDetails({ carsList, onRent }) {
  const { id } = useParams();

  // Find matching vehicle
  const car = carsList.find(c => c.id === id);

  if (!car) {
    return (
      <PageContainer>
        <BackLink to="/cars">← Back to Fleet</BackLink>
        <div className="text-center py-5">
          <h2 className="fw-bold mb-3">Vehicle Profile Not Found</h2>
          <p className="text-muted mb-4">We are unable to locate the requested car profile in our active database.</p>
          <Link to="/cars" style={{ textDecoration: 'none' }}>
            <CustomButton>Return to Fleet</CustomButton>
          </Link>
        </div>
      </PageContainer>
    );
  }

  const { name, type, pricePerDay, status, image, fuel, transmission, year } = car;
  
  // Parse category (SUV, Sedan, Sports, Luxury)
  const category = type.includes('SUV') ? 'SUV' : type.includes('Sedan') ? 'Sedan' : type.includes('Sports') || type.includes('Coupe') ? 'Sports' : 'Luxury';

  const desc = car.description || defaultDescriptions[category] || "Experience the peak of engineering and prestige rental comfort in this meticulously detailed luxury vehicle.";

  return (
    <PageContainer>
      <BackLink to="/cars">← Back to Fleet</BackLink>

      <DetailGrid>
        <ImageCard>
          <CarImage src={image} alt={name} />
        </ImageCard>

        <InfoCol>
          <Header>
            <Title>{name}</Title>
            <CategoryBadge>{category}</CategoryBadge>
          </Header>

          <Description>{desc}</Description>

          <PriceBox>
            <PriceLeft>
              <PriceLabel>Rental Rate</PriceLabel>
              <PriceValue>₹{pricePerDay.toLocaleString()}</PriceValue>
            </PriceLeft>
            <CustomButton 
              size="lg" 
              disabled={status !== 'Available'}
              onClick={() => onRent && onRent(car)}
            >
              {status === 'Available' ? 'Rent Now' : 'Currently Booked'}
            </CustomButton>
          </PriceBox>

          <SubTitle>Technical Specifications</SubTitle>
          <SpecsGrid>
            <SpecCard>
              <FaGasPump />
              <SpecDetails>
                <SpecLabel>Fuel Type</SpecLabel>
                <SpecValue>{fuel}</SpecValue>
              </SpecDetails>
            </SpecCard>
            <SpecCard>
              <FaCog />
              <SpecDetails>
                <SpecLabel>Transmission</SpecLabel>
                <SpecValue>{transmission}</SpecValue>
              </SpecDetails>
            </SpecCard>
            <SpecCard>
              <FaChair />
              <SpecDetails>
                <SpecLabel>Seating Capacity</SpecLabel>
                <SpecValue>5 Seats</SpecValue>
              </SpecDetails>
            </SpecCard>
            <SpecCard>
              <FaCalendarAlt />
              <SpecDetails>
                <SpecLabel>Model Year</SpecLabel>
                <SpecValue>{year || 2023}</SpecValue>
              </SpecDetails>
            </SpecCard>
          </SpecsGrid>

          <FeaturesContainer>
            <SubTitle>Luxury Amenities Included</SubTitle>
            <FeaturesGrid>
              {defaultFeatures.map((feat, index) => (
                <FeatureItem key={index}>
                  <FaCheckCircle />
                  <span>{feat}</span>
                </FeatureItem>
              ))}
            </FeaturesGrid>
          </FeaturesContainer>
        </InfoCol>
      </DetailGrid>
    </PageContainer>
  );
}

export default CarDetails;
