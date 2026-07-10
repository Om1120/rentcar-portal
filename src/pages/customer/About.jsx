import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../../components/customer/SectionTitle';
import StatsCard from '../../components/customer/StatsCard';
import carrent from '../../assets/carrent.png';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 5rem 24px;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 60px;
  align-items: center;
  margin-bottom: 5rem;
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Paragraph = styled.p`
  font-size: 1.05rem;
  line-height: 1.7;
  color: #b3c5df;
  margin: 0;
`;

const ImageContainer = styled.div`
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.05);
  height: 400px;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(124, 58, 237, 0.2) 0%, rgba(6, 182, 212, 0.2) 100%);
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const MissionVisionGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-bottom: 5rem;
`;

const MVCard = styled.div`
  background: var(--website-card-bg, #111827);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 2.5rem 2rem;
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(6, 182, 212, 0.2);
    transform: translateY(-5px);
  }
`;

const MVTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, var(--website-primary, #7C3AED) 0%, var(--website-secondary, #06B6D4) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
`;

function About({ about }) {
  const { story, mission, vision, stats } = about || {};

  return (
    <PageContainer>
      <SectionTitle 
        title="Our Story & Vision" 
        subtitle="Learn how we grew from a small local fleet to the region's premium car rental provider."
      />

      <ContentGrid>
        <TextBlock>
          <MVTitle style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>DriveX Legacy</MVTitle>
          <Paragraph>
            {story || 'Founded with a vision to redefine luxury travel, DriveX has been at the forefront of premium car rentals for over a decade. We curate only the most exceptional high-performance and luxury vehicles to deliver an unparalleled driving experience.'}
          </Paragraph>
          <Paragraph>
            Our dedication to quality goes beyond our fleet. We guarantee a friction-free booking process, customized concierge services, and pristine detailing for every single rental. When you choose DriveX, you are choosing an elite service that treats your journey as a championship run.
          </Paragraph>
        </TextBlock>
        <ImageContainer>
          <StyledImage 
            src={carrent} 
            alt="DriveX Legacy" 
          />
        </ImageContainer>
      </ContentGrid>

      <MissionVisionGrid>
        <MVCard>
          <MVTitle>Our Mission</MVTitle>
          <Paragraph>
            {mission || 'To deliver a seamless, prestige rental experience by combining an elite fleet of vehicles with state-of-the-art booking technology and unwavering, high-touch client support.'}
          </Paragraph>
        </MVCard>
        <MVCard>
          <MVTitle>Our Vision</MVTitle>
          <Paragraph>
            {vision || 'To be the ultimate global symbol of luxury vehicle rentals, inspiring sophisticated journeys and setting the industry standard for customer-centric elegance.'}
          </Paragraph>
        </MVCard>
      </MissionVisionGrid>

      <SectionTitle 
        title="Fleet Statistics" 
        subtitle="The numbers that define our standards and success on the road."
      />

      <StatsGrid>
        <StatsCard value={stats?.vehicles || "150+"} title="Vehicles in Fleet" />
        <StatsCard value={stats?.customers || "10k+"} title="Happy Customers" />
        <StatsCard value={stats?.locations || "25+"} title="Rental Locations" />
        <StatsCard value={stats?.experience || "10+ Years"} title="Years of Excellence" />
      </StatsGrid>
    </PageContainer>
  );
}

export default About;
