import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaCrown, FaDollarSign, FaCalendarCheck, FaHeadset, FaArrowRight } from 'react-icons/fa';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';

import SectionTitle from '../../components/customer/SectionTitle';
import CustomerCarCard from '../../components/customer/CustomerCarCard';
import FeatureCard from '../../components/customer/FeatureCard';
import StatsCard from '../../components/customer/StatsCard';
import CustomerChartCard from '../../components/customer/CustomerChartCard';
import CustomerReviewCard from '../../components/customer/CustomerReviewCard';
import CustomButton from '../../components/customer/CustomButton';

import hero from '../../assets/hero.png';
import r1 from '../../assets/r1.jpg';
import r2 from '../../assets/r2.jpg';
import r3 from '../../assets/r3.jpg';
import r4 from '../../assets/r4.jpg';
import r5 from '../../assets/r5.jpg';
import r6 from '../../assets/r6.jpg';

const localAvatars = [r1, r2, r3, r4, r5, r6];

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeroSection = styled.div`
  height: 600px;
  background: #020617;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding: 0 24px;
  text-shadow: 0 4px 15px rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  animation: fadeInUp 1s ease-out;
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const CaptionTitle = styled.h2`
  font-size: 3.2rem;
  font-weight: 800;
  color: #ffffff !important;
  -webkit-text-stroke: 1.5px #000000;
  margin-bottom: 1.2rem;
  letter-spacing: -1px;
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.6);
  
  @media (max-width: 767.98px) {
    font-size: 2.2rem;
  }
`;

const CaptionSubtitle = styled.p`
  font-size: 1.2rem;
  color: #ffffff !important;
  margin-bottom: 2.2rem;
  line-height: 1.6;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.9);
`;

const SlideOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(11, 15, 25, 0.4) 0%,
    rgba(11, 15, 25, 0.85) 100%
  );
`;

const SlideImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
`;

const Section = styled.section`
  padding: 5rem 24px;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  
  @media (max-width: 991.98px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  
  @media (max-width: 575.98px) {
    grid-template-columns: 1fr;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  
  @media (max-width: 991.98px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  
  @media (max-width: 575.98px) {
    grid-template-columns: 1fr;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  margin-bottom: 3rem;
  
  @media (max-width: 991.98px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: 767.98px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const ChartsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 30px;
  
  @media (max-width: 991.98px) {
    grid-template-columns: 1fr;
  }
`;

const CenterRow = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`;

const PromoBanner = styled.div`
  background: linear-gradient(135deg, rgba(124, 58, 237, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%);
  border: 1px solid rgba(124, 58, 237, 0.2);
  border-radius: 20px;
  padding: 1.5rem 2rem;
  text-align: center;
  margin-top: 3rem;
  color: #ffffff;
  font-weight: 600;
  letter-spacing: 0.5px;
  font-size: 1.05rem;
  box-shadow: 0 10px 30px rgba(124, 58, 237, 0.05);
`;

const InnerContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

function Home({ 
  carsList, 
  reviewsList, 
  adminSettings, 
  onRent 
}) {
  const { heroBanner, promotionalText } = adminSettings || {};
  const slides = heroBanner?.slides || [];

  // Filter out available cars
  const availableCars = carsList.filter(c => c.status === 'Available');
  
  // Featured Cars (first 3 available cars)
  const featuredCars = availableCars.slice(0, 3);
  
  // Popular Cars (next 3 available cars)
  const popularCars = availableCars.slice(3, 6);

  // Compute metrics dynamically for the Stats
  const totalCarsCount = carsList.length;
  const suvCarsCount = carsList.filter(c => c.type.includes('SUV')).length;
  const sedanCarsCount = carsList.filter(c => c.type.includes('Sedan')).length;
  const luxuryCarsCount = carsList.filter(c => c.type.includes('Luxury') || c.type.includes('Supercar')).length;
  const sportsCarsCount = carsList.filter(c => c.type.includes('Sports') || c.type.includes('Coupe')).length;

  // Chart settings
  const pieData = [
    { name: 'SUVs', value: suvCarsCount },
    { name: 'Sedans', value: sedanCarsCount },
    { name: 'Sports', value: sportsCarsCount },
    { name: 'Luxury', value: luxuryCarsCount }
  ];

  const barData = carsList.slice(0, 5).map(c => ({
    name: c.name.split(' ')[0] + ' ' + (c.name.split(' ')[1] || ''),
    price: c.pricePerDay,
    year: c.year || 2022
  }));

  const COLORS = ['#7C3AED', '#06B6D4', '#3B82F6', '#10B981'];

  return (
    <HomeContainer>
      {/* Hero Section */}
      <HeroSection>
        <SlideImage src={hero} alt="DriveX Hero" />
        <SlideOverlay />
        <HeroContent>
          <CaptionTitle>{heroBanner?.title || 'Experience The Elite Drive'}</CaptionTitle>
          <CaptionSubtitle>
            {heroBanner?.subtitle || 'Rent uncompromising luxury, sports, and supercar vehicles at competitive rates. Premium fleet, seamless booking, and 24/7 support.'}
          </CaptionSubtitle>
          <Link to="/cars" style={{ textDecoration: 'none' }}>
            <CustomButton size="lg">
              {heroBanner?.ctaText || 'Explore Fleet'} <FaArrowRight style={{ fontSize: '0.9rem' }} />
            </CustomButton>
          </Link>
        </HeroContent>
      </HeroSection>

      {/* Promotional Bar */}
      {promotionalText && (
        <Section style={{ paddingBottom: 0 }}>
          <PromoBanner>{promotionalText}</PromoBanner>
        </Section>
      )}

      {/* Featured Cars */}
      <Section id="featured">
        <SectionTitle 
          title="Featured Fleet Highlights" 
          subtitle="Discover our elite selection of available premium models, handpicked for exceptional driving dynamics."
        />
        <Grid>
          {featuredCars.map((car) => (
            <CustomerCarCard key={car.id} car={car} onRent={onRent} />
          ))}
        </Grid>
        <CenterRow>
          <Link to="/cars" style={{ textDecoration: 'none' }}>
            <CustomButton outline>View All Vehicles <FaArrowRight /></CustomButton>
          </Link>
        </CenterRow>
      </Section>

      {/* Why Choose Section */}
      <section style={{ background: '#080c14', borderTop: '1px solid rgba(255, 255, 255, 0.02)', borderBottom: '1px solid rgba(255, 255, 255, 0.02)', padding: '5rem 24px' }}>
        <InnerContainer>
          <SectionTitle 
            title="Why Choose DriveX" 
            subtitle="We define premium standards in vehicle rentals. Safe, luxury service tailored for elite tastes."
          />
          <FeaturesGrid>
            <FeatureCard 
              icon={FaCrown} 
              title="Elite Fleet" 
              description="A handpicked luxury portfolio comprising top-tier engineering masterpieces from BMW, Porsche, Tesla, and Range Rover."
            />
            <FeatureCard 
              icon={FaDollarSign} 
              title="Honest Pricing" 
              description="Transparent luxury rates with absolutely zero hidden surcharges or surprise booking fees. Pay exactly what you see."
            />
            <FeatureCard 
              icon={FaCalendarCheck} 
              title="Seamless Booking" 
              description="Confirm your premium reservation under 60 seconds with our streamlined digital catalog and quick key handovers."
            />
            <FeatureCard 
              icon={FaHeadset} 
              title="24/7 Concierge" 
              description="Our dedicated support and roadside concierge lines are available around the clock to guarantee flawless journeys."
            />
          </FeaturesGrid>
        </InnerContainer>
      </section>

      {/* Popular Cars Section */}
      <Section id="popular">
        <SectionTitle 
          title="Trending Popular Rides" 
          subtitle="Explore the vehicles our clients choose most frequently for corporate bookings and weekend escapes."
        />
        <Grid>
          {popularCars.map((car) => (
            <CustomerCarCard key={car.id} car={car} onRent={onRent} />
          ))}
        </Grid>
      </Section>

      {/* Customer Reviews Section */}
      <section style={{ background: '#080c14', borderTop: '1px solid rgba(255, 255, 255, 0.02)', borderBottom: '1px solid rgba(255, 255, 255, 0.02)', padding: '5rem 24px' }}>
        <InnerContainer>
          <SectionTitle 
            title="What Our Clients Say" 
            subtitle="Read certified testimonials from corporate travelers, sports enthusiasts, and luxury car renters."
          />
          <Grid>
            {reviewsList.slice(0, 3).map((review, index) => {
              const avatar = localAvatars[index % localAvatars.length];
              return (
                <CustomerReviewCard key={review.id || index} review={review} avatar={avatar} />
              );
            })}
          </Grid>
          <CenterRow>
            <Link to="/reviews" style={{ textDecoration: 'none' }}>
              <CustomButton outline>Read All Reviews</CustomButton>
            </Link>
          </CenterRow>
        </InnerContainer>
      </section>

      {/* Statistics Section */}
      <Section>
        <SectionTitle 
          title="DriveX Dashboard Insights" 
          subtitle="Live operational metrics and analytics feeding directly from our fleet manager admin console."
        />

        <StatsGrid>
          <StatsCard value={String(totalCarsCount)} title="Total Fleet" />
          <StatsCard value={String(luxuryCarsCount)} title="Luxury Class" />
          <StatsCard value={String(suvCarsCount)} title="SUV Fleet" />
          <StatsCard value={String(sedanCarsCount)} title="Sedan Fleet" />
          <StatsCard value="120+" title="Monthly Rentals" />
        </StatsGrid>

        <ChartsGrid>
          <CustomerChartCard title="Fleet Category Split (%)">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(val) => [`${val} Vehicles`, 'Count']} />
                <Legend iconType="circle" />
              </PieChart>
            </ResponsiveContainer>
          </CustomerChartCard>

          <CustomerChartCard title="Rental Rates Comparison (₹/Day)">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData} margin={{ left: -10, bottom: 0, top: 10, right: 10 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                <XAxis dataKey="name" stroke="#8a99ad" tickLine={false} style={{ fontSize: '0.8rem' }} />
                <YAxis stroke="#8a99ad" tickLine={false} style={{ fontSize: '0.8rem' }} />
                <Tooltip formatter={(value) => [`₹${value.toLocaleString()}/day`, 'Rate']} />
                <Bar dataKey="price" fill="url(#purpleCyanGrad)" radius={[8, 8, 0, 0]} />
                <defs>
                  <linearGradient id="purpleCyanGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#7C3AED" />
                    <stop offset="100%" stopColor="#06B6D4" />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </CustomerChartCard>
        </ChartsGrid>
      </Section>
    </HomeContainer>
  );
}

export default Home;
