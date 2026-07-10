import React, { useState } from 'react';
import styled from 'styled-components';
import SectionTitle from '../../components/customer/SectionTitle';
import CustomerReviewCard from '../../components/customer/CustomerReviewCard';
import CustomButton from '../../components/customer/CustomButton';
import { FaStar } from 'react-icons/fa';

import r1 from '../../assets/r1.jpg';
import r2 from '../../assets/r2.jpg';
import r3 from '../../assets/r3.jpg';
import r4 from '../../assets/r4.jpg';
import r5 from '../../assets/r5.jpg';
import r6 from '../../assets/r6.jpg';

const localAvatars = [r1, r2, r3, r4, r5, r6];

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 5rem 24px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`;

const ReviewsGrid = styled.div`
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

const EmptyState = styled.div`
  text-align: center;
  padding: 4rem;
  background: var(--website-card-bg, #111827);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  color: #8a99ad;
`;

function Reviews({ reviewsList }) {
  const [ratingFilter, setRatingFilter] = useState('All');

  // Filter reviews based on rating selection
  const filteredReviews = ratingFilter === 'All' 
    ? reviewsList 
    : reviewsList.filter(r => r.rating === parseInt(ratingFilter));

  const filterOptions = ['All', '5', '4', '3'];

  return (
    <PageContainer>
      <SectionTitle 
        title="Client Reviews" 
        subtitle="Read real testimonials from our luxury fleet renters and corporate clients."
      />

      <FilterContainer>
        {filterOptions.map((opt) => (
          <CustomButton 
            key={opt}
            outline={ratingFilter !== opt}
            size="sm"
            onClick={() => setRatingFilter(opt)}
          >
            {opt === 'All' ? 'All Ratings' : `${opt} Stars`}
            {opt !== 'All' && <FaStar style={{ marginLeft: '4px', verticalAlign: 'middle', color: '#f59e0b' }} />}
          </CustomButton>
        ))}
      </FilterContainer>

      {filteredReviews.length > 0 ? (
        <ReviewsGrid>
          {filteredReviews.map((review, index) => {
            // Find avatar based on index or default fallback
            const avatar = localAvatars[index % localAvatars.length];
            return (
              <CustomerReviewCard 
                key={review.id || index}
                review={review}
                avatar={avatar}
              />
            );
          })}
        </ReviewsGrid>
      ) : (
        <EmptyState>
          <h4>No Reviews Found</h4>
          <p className="mb-0">There are no client reviews with a rating of {ratingFilter} Stars currently.</p>
        </EmptyState>
      )}
    </PageContainer>
  );
}

export default Reviews;
