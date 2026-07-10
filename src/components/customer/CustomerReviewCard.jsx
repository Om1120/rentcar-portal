import React from 'react';
import styled from 'styled-components';
import { FaStar, FaRegStar } from 'react-icons/fa';

const Card = styled.div`
  background: var(--website-card-bg, #111827);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(6, 182, 212, 0.25);
  }
`;

const ProfileRow = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 1.2rem;
`;

const Avatar = styled.img`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--website-secondary, #06B6D4);
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.h4`
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0;
  color: inherit;
`;

const DateText = styled.span`
  font-size: 0.75rem;
  color: #8a99ad;
`;

const StarsRow = styled.div`
  display: flex;
  gap: 4px;
  color: #f59e0b;
  margin-bottom: 1rem;
`;

const Comment = styled.p`
  font-size: 0.95rem;
  color: #b3c5df;
  line-height: 1.6;
  font-style: italic;
  margin: 0;
  position: relative;
  flex-grow: 1;
  padding-left: 5px;

  &::before {
    content: '“';
    font-size: 3rem;
    color: rgba(6, 182, 212, 0.15);
    position: absolute;
    top: -20px;
    left: -10px;
    font-family: serif;
  }
`;

const CarText = styled.div`
  margin-top: 1.2rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--website-primary, #7C3AED);
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

function CustomerReviewCard({ review, avatar }) {
  const { customerName, rating, comment, date, carName } = review;

  return (
    <Card>
      <ProfileRow>
        <Avatar src={avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(customerName)}&background=7C3AED&color=fff`} alt={customerName} />
        <Info>
          <Name>{customerName}</Name>
          <DateText>{date}</DateText>
        </Info>
      </ProfileRow>
      <StarsRow>
        {Array.from({ length: 5 }).map((_, i) => (
          i < rating ? <FaStar key={i} /> : <FaRegStar key={i} />
        ))}
      </StarsRow>
      <Comment>{comment}</Comment>
      {carName && <CarText>Rented: {carName}</CarText>}
    </Card>
  );
}

export default CustomerReviewCard;
