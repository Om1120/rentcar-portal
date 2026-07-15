import React, { useState } from 'react';
import styled from 'styled-components';
import { FaTimes, FaCalendarAlt, FaMapMarkerAlt, FaBriefcase, FaClock, FaCar } from 'react-icons/fa';
import CustomButton from './CustomButton';

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(11, 15, 25, 0.85);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1100;
  animation: fadeIn 0.3s ease-out;

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

const ModalContent = styled.div`
  background: var(--website-card-bg, #111827);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  width: 100%;
  max-width: 650px;
  max-height: 90vh;
  overflow-y: auto;
  padding: 2.5rem;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
  position: relative;
  animation: slideUp 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);

  @keyframes slideUp {
    from { transform: translateY(30px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  color: #8a99ad;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #ffffff;
    background: rgba(239, 68, 68, 0.15);
    border-color: rgba(239, 68, 68, 0.2);
    transform: rotate(90deg);
  }
`;

const Header = styled.div`
  text-align: left;
  margin-bottom: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  padding-bottom: 1rem;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const CarDetailsCard = styled.div`
  background: rgba(255, 255, 255, 0.01);
  border: 1px solid rgba(255, 255, 255, 0.04);
  border-radius: 16px;
  padding: 1.2rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 20px;
  text-align: left;
`;

const CarImageThumb = styled.img`
  width: 100px;
  height: 60px;
  object-fit: contain;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 8px;
  padding: 4px;
`;

const CarInfo = styled.div`
  flex: 1;
`;

const CarName = styled.h4`
  font-size: 1.1rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0;
`;

const CarPrice = styled.span`
  font-size: 0.9rem;
  color: var(--website-secondary, #06B6D4);
  font-weight: 600;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: left;
`;

const Label = styled.label`
  font-size: 0.88rem;
  font-weight: 600;
  color: #cdd5e0;
  display: flex;
  align-items: center;
  gap: 6px;
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
    box-shadow: 0 0 10px rgba(124, 58, 237, 0.15);
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

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;

  .screen-max-576 & {
    grid-template-columns: 1fr;
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
  height: 80px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--website-primary, #7C3AED);
    background: rgba(255, 255, 255, 0.04);
  }
`;

function InquiryModal({ car, isOpen, onClose, onSubmit, defaultEmail = '' }) {
  const [customerName, setCustomerName] = useState('');
  const [email, setEmail] = useState(defaultEmail);
  const [phone, setPhone] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [durationDays, setDurationDays] = useState(3);
  const [dropoffLocation, setDropoffLocation] = useState('');
  const [purpose, setPurpose] = useState('Leisure');
  const [specialRequests, setSpecialRequests] = useState('');

  if (!isOpen || !car) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      car,
      customerName,
      email,
      phone,
      pickupDate,
      durationDays: parseInt(durationDays) || 1,
      dropoffLocation,
      purpose,
      specialRequests
    });
  };

  return (
    <ModalBackdrop onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose} aria-label="Close modal">
          <FaTimes />
        </CloseButton>

        <Header>
          <Title><FaCar color="var(--website-secondary)" /> Rental Booking Inquiry</Title>
          <p className="text-muted small mb-0">Submit your rental preferences to reserve this luxury vehicle.</p>
        </Header>

        <CarDetailsCard>
          <CarImageThumb src={car.image} alt={car.name} />
          <CarInfo>
            <CarName>{car.name}</CarName>
            <CarPrice>₹{car.pricePerDay.toLocaleString()} / Day</CarPrice>
          </CarInfo>
        </CarDetailsCard>

        <Form onSubmit={handleSubmit}>
          <Row>
            <FormGroup>
              <Label>Full Name *</Label>
              <Input 
                type="text" 
                placeholder="Your full name" 
                value={customerName} 
                onChange={(e) => setCustomerName(e.target.value)} 
                required 
              />
            </FormGroup>
            <FormGroup>
              <Label>Email ID *</Label>
              <Input 
                type="email" 
                placeholder="your.email@example.com" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
            </FormGroup>
          </Row>

          <Row>
            <FormGroup>
              <Label>Phone Number *</Label>
              <Input 
                type="tel" 
                placeholder="e.g. +91 98765 43210" 
                value={phone} 
                onChange={(e) => setPhone(e.target.value)} 
                required 
              />
            </FormGroup>
            <FormGroup>
              <Label><FaCalendarAlt /> Pickup Date *</Label>
              <Input 
                type="date" 
                value={pickupDate} 
                onChange={(e) => setPickupDate(e.target.value)} 
                required 
              />
            </FormGroup>
          </Row>

          <Row>
            <FormGroup>
              <Label><FaClock /> Rental Duration (Days) *</Label>
              <Input 
                type="number" 
                min="1" 
                value={durationDays} 
                onChange={(e) => setDurationDays(e.target.value)} 
                required 
              />
            </FormGroup>
            <FormGroup>
              <Label><FaMapMarkerAlt /> Drop-off Location *</Label>
              <Input 
                type="text" 
                placeholder="Drop-off address or location" 
                value={dropoffLocation} 
                onChange={(e) => setDropoffLocation(e.target.value)} 
                required 
              />
            </FormGroup>
          </Row>

          <FormGroup>
            <Label><FaBriefcase /> Purpose of Rental *</Label>
            <Select value={purpose} onChange={(e) => setPurpose(e.target.value)}>
              <option value="Leisure">Leisure / Road Trip</option>
              <option value="Business">Business / Corporate Travel</option>
              <option value="Event/Wedding">Event / Wedding</option>
              <option value="Other">Other</option>
            </Select>
          </FormGroup>

          <FormGroup>
            <Label>Special Requirements / Notes (Optional)</Label>
            <TextArea 
              placeholder="Any special requests like baby seat, GPS, chauffeur service, etc."
              value={specialRequests}
              onChange={(e) => setSpecialRequests(e.target.value)}
            />
          </FormGroup>

          <div className="d-flex justify-content-end gap-3 mt-2">
            <CustomButton outline type="button" onClick={onClose}>Cancel</CustomButton>
            <CustomButton type="submit">Submit Inquiry</CustomButton>
          </div>
        </Form>
      </ModalContent>
    </ModalBackdrop>
  );
}

export default InquiryModal;
