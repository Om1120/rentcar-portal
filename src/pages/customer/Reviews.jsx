import React, { useState } from 'react';
import styled from 'styled-components';
import { toast } from 'react-toastify';
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
  align-items: center;
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

const ReviewFormContainer = styled.div`
  background: var(--website-card-bg, #111827);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 2rem;
  margin-bottom: 3rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  animation: fadeIn 0.4s ease-out;

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  text-align: left;
`;

const FormLabel = styled.label`
  display: block;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #ffffff;
  font-size: 0.9rem;
`;

const Input = styled.input`
  width: 100%;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 12px 16px;
  color: #ffffff;
  font-size: 0.95rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--website-primary, #7C3AED);
    background: rgba(255, 255, 255, 0.04);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 12px 16px;
  color: #ffffff;
  font-size: 0.95rem;
  height: 120px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--website-primary, #7C3AED);
    background: rgba(255, 255, 255, 0.04);
  }
`;

const Select = styled.select`
  width: 100%;
  background: #0b0f19;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 12px 16px;
  color: #ffffff;
  font-size: 0.95rem;
  cursor: pointer;
  appearance: none;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--website-primary, #7C3AED);
  }

  option {
    background: #0b0f19;
    color: #ffffff;
  }
`;

const StarRatingSelector = styled.div`
  display: flex;
  gap: 8px;
  font-size: 1.5rem;
  margin-top: 0.25rem;
  
  svg {
    cursor: pointer;
    transition: transform 0.2s ease;
    
    &:hover {
      transform: scale(1.2);
    }
  }
`;

function Reviews({ reviewsList = [], carsList = [], onAddReview }) {
  const [showForm, setShowForm] = useState(false);
  
  const [customerName, setCustomerName] = useState('');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [carName, setCarName] = useState('');
  const [hoverRating, setHoverRating] = useState(0);

  // Always show all ratings (no filter)
  const filteredReviews = reviewsList;

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (!customerName || !comment || !carName) {
      toast.error("Please fill in all fields to submit your review.");
      return;
    }
    
    onAddReview({
      customerName,
      rating,
      comment,
      carName
    });

    // Reset form
    setCustomerName('');
    setRating(5);
    setComment('');
    setCarName('');
    setShowForm(false);
  };

  return (
    <PageContainer>
      <SectionTitle 
        title="Client Reviews" 
        subtitle="Read real testimonials from our luxury fleet renters and corporate clients."
      />

      <FilterContainer>
        <CustomButton 
          onClick={() => setShowForm(!showForm)}
          style={{ background: 'var(--website-primary, #7C3AED)', border: 'none' }}
        >
          {showForm ? 'Cancel Review' : 'Write a Review'}
        </CustomButton>
      </FilterContainer>

      {showForm && (
        <ReviewFormContainer>
          <h4 className="fw-bold mb-4 text-start" style={{ color: '#ffffff' }}>Share Your Experience</h4>
          <form onSubmit={handleSubmitReview}>
            <div className="row">
              <div className="col-md-6">
                <FormGroup>
                  <FormLabel htmlFor="revCustName">Your Name</FormLabel>
                  <Input 
                    type="text" 
                    id="revCustName" 
                    placeholder="e.g. Natasha Romanoff" 
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    required
                  />
                </FormGroup>
              </div>
              <div className="col-md-6">
                <FormGroup>
                  <FormLabel htmlFor="revCarName">Select Vehicle Rented</FormLabel>
                  <Select 
                    id="revCarName" 
                    value={carName}
                    onChange={(e) => setCarName(e.target.value)}
                    required
                  >
                    <option value="" disabled>-- Select a car --</option>
                    {carsList.map(car => (
                      <option key={car.id} value={car.name}>{car.name}</option>
                    ))}
                  </Select>
                </FormGroup>
              </div>
            </div>

            <FormGroup>
              <FormLabel>Rating</FormLabel>
              <StarRatingSelector>
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar 
                    key={star}
                    color={(hoverRating || rating) >= star ? '#f59e0b' : 'rgba(255,255,255,0.1)'}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    onClick={() => setRating(star)}
                  />
                ))}
              </StarRatingSelector>
            </FormGroup>

            <FormGroup>
              <FormLabel htmlFor="revComment">Review Message</FormLabel>
              <TextArea 
                id="revComment"
                placeholder="Tell us about the vehicle condition, driving experience, and customer service..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
              />
            </FormGroup>

            <div style={{ textAlign: 'left' }}>
              <CustomButton type="submit">Submit Feedback</CustomButton>
            </div>
          </form>
        </ReviewFormContainer>
      )}

      {filteredReviews.length > 0 ? (
        <ReviewsGrid>
          {filteredReviews.map((review, index) => {
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
          <p className="mb-0">There are no client reviews currently.</p>
        </EmptyState>
      )}
    </PageContainer>
  );
}

export default Reviews;
