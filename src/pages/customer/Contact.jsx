import React, { useState } from 'react';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import SectionTitle from '../../components/customer/SectionTitle';
import CustomButton from '../../components/customer/CustomButton';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 5rem 24px;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 50px;
  align-items: start;
  
  @media (max-width: 991.98px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const InfoCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const InfoCard = styled.div`
  background: var(--website-card-bg, #111827);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 2rem;
  display: flex;
  align-items: flex-start;
  gap: 20px;
`;

const IconBox = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(124, 58, 237, 0.1);
  color: var(--website-primary, #7C3AED);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  flex-shrink: 0;
`;

const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const InfoTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0;
  color: inherit;
`;

const InfoText = styled.p`
  font-size: 0.95rem;
  color: #8a99ad;
  line-height: 1.5;
  margin: 0;
`;

const MapContainer = styled.div`
  border-radius: 20px;
  overflow: hidden;
  height: 250px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
`;

const FormCard = styled.div`
  background: var(--website-card-bg, #111827);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
  
  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-size: 0.9rem;
  font-weight: 600;
  color: inherit;
`;

const Input = styled.input`
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

const TextArea = styled.textarea`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 12px 16px;
  color: #ffffff;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  resize: none;

  &:focus {
    outline: none;
    border-color: var(--website-primary, #7C3AED);
    background: rgba(255, 255, 255, 0.04);
    box-shadow: 0 0 10px rgba(124, 58, 237, 0.15);
  }
`;

const ErrorText = styled.span`
  color: #ef4444;
  font-size: 0.8rem;
  font-weight: 500;
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

function Contact({ contact, onContactSubmit }) {
  const { phone, email, address, mapCoords } = contact || {};

  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      tempErrors.phone = 'Phone number is required';
    } else if (!/^[0-9]{10,13}$/.test(formData.phone.replace(/[\s().+-]/g, ''))) {
      tempErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.message.trim()) tempErrors.message = 'Message is required';
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      if (onContactSubmit) {
        onContactSubmit(formData);
      }
      toast.success('Thank you! Your inquiry was sent successfully. We will get back to you shortly.');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setErrors({});
    } else {
      toast.error('Please fix the errors in the form before submitting.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error as user types
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  return (
    <PageContainer>
      <SectionTitle 
        title="Get in Touch" 
        subtitle="Contact our customer service team. We are available 24/7 to assist with your bookings."
      />

      <ContactGrid>
        <InfoCol>
          <InfoCard>
            <IconBox><FaMapMarkerAlt /></IconBox>
            <InfoContent>
              <InfoTitle>Corporate Headquarters</InfoTitle>
              <InfoText>{address || "Shopper's Plaza, Chimanlal Girdharlal Rd, Navrangpura, Ahmedabad, Gujarat 380009"}</InfoText>
            </InfoContent>
          </InfoCard>

          <InfoCard>
            <IconBox><FaPhoneAlt /></IconBox>
            <InfoContent>
              <InfoTitle>Contact Support</InfoTitle>
              <InfoText>{phone || '+91 78782 89727'}</InfoText>
            </InfoContent>
          </InfoCard>

          <InfoCard>
            <IconBox><FaEnvelope /></IconBox>
            <InfoContent>
              <InfoTitle>Email Inquiries</InfoTitle>
              <InfoText>{email || 'drivex007@gmail.com'}</InfoText>
            </InfoContent>
          </InfoCard>

          <MapContainer>
            <iframe 
              src={mapCoords || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.6961474274945!2d72.55938887603507!3d23.034954479164803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f509e53bf9%3A0xe54d8fb85c5717ef!2sShoppers%20Plaza%203!5e0!3m2!1sen!2sin!4v1718430000000!5m2!1sen!2sin"} 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              title="Google Map Location"
            ></iframe>
          </MapContainer>
        </InfoCol>

        <FormCard>
          <MVTitle style={{ fontSize: '1.6rem', marginBottom: '1.5rem' }}>Send Message</MVTitle>
          <Form onSubmit={handleSubmit}>
            <InputGroup>
              <Label htmlFor="contactName">Full Name</Label>
              <Input 
                type="text" 
                id="contactName" 
                name="name" 
                placeholder="e.g. Bruce Wayne" 
                value={formData.name} 
                onChange={handleChange}
              />
              {errors.name && <ErrorText>{errors.name}</ErrorText>}
            </InputGroup>

            <InputGroup>
              <Label htmlFor="contactEmail">Email Address</Label>
              <Input 
                type="email" 
                id="contactEmail" 
                name="email" 
                placeholder="e.g. bruce@wayne.com" 
                value={formData.email} 
                onChange={handleChange}
              />
              {errors.email && <ErrorText>{errors.email}</ErrorText>}
            </InputGroup>

            <InputGroup>
              <Label htmlFor="contactPhone">Phone Number</Label>
              <Input 
                type="text" 
                id="contactPhone" 
                name="phone" 
                placeholder="e.g. 7878289727" 
                value={formData.phone} 
                onChange={handleChange}
              />
              {errors.phone && <ErrorText>{errors.phone}</ErrorText>}
            </InputGroup>

            <InputGroup>
              <Label htmlFor="contactMessage">Message</Label>
              <TextArea 
                id="contactMessage" 
                name="message" 
                rows="5" 
                placeholder="How can our concierge team assist you today?" 
                value={formData.message} 
                onChange={handleChange}
              />
              {errors.message && <ErrorText>{errors.message}</ErrorText>}
            </InputGroup>

            <CustomButton type="submit" style={{ marginTop: '10px' }}>
              Send Message <FaPaperPlane style={{ fontSize: '0.85rem' }} />
            </CustomButton>
          </Form>
        </FormCard>
      </ContactGrid>
    </PageContainer>
  );
}

export default Contact;
