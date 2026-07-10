import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaCarSide, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = styled.footer`
  background: #080c14;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  color: #8a99ad;
  padding: 5rem 0 2rem;
`;

const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 24px;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: 40px;
  margin-bottom: 4rem;
`;

const FooterCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Brand = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.5rem;
  font-weight: 800;
  text-decoration: none;
  background: linear-gradient(135deg, var(--website-primary, #7C3AED) 0%, var(--website-secondary, #06B6D4) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Description = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0;
`;

const SocialRow = styled.div`
  display: flex;
  gap: 12px;
`;

const SocialIcon = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
  color: #b3c5df;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  font-size: 0.95rem;

  &:hover {
    background: linear-gradient(135deg, var(--website-primary, #7C3AED) 0%, var(--website-secondary, #06B6D4) 100%);
    color: #ffffff;
    transform: translateY(-3px);
    border-color: transparent;
  }
`;

const Title = styled.h5`
  font-size: 1.1rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0;
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const FooterLink = styled(Link)`
  color: #8a99ad;
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.2s ease;

  &:hover {
    color: var(--website-secondary, #06B6D4);
  }
`;

const ContactInfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 0.95rem;

  svg {
    color: var(--website-primary, #7C3AED);
    font-size: 1rem;
    margin-top: 3px;
  }
`;

const Divider = styled.hr`
  border: 0;
  height: 1px;
  background: rgba(255, 255, 255, 0.05);
  margin: 0 0 2rem;
`;

const BottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
`;

const Copyright = styled.p`
  margin: 0;
`;

const LegalLinks = styled.div`
  display: flex;
  gap: 24px;
`;

// Helper map to convert social name strings to React Icons
const socialIconMap = {
  FaFacebookF: <FaFacebookF />,
  FaTwitter: <FaTwitter />,
  FaInstagram: <FaInstagram />,
  FaLinkedinIn: <FaLinkedinIn />
};

function CustomerFooter({ footer, contact, websiteName }) {
  const { description, copyright } = footer || {};
  const { phone, email, address, socialMedia } = contact || {};

  return (
    <Footer>
      <Container>
        <FooterGrid>
          <FooterCol>
            <Brand to="/">
              <FaCarSide style={{ color: 'var(--website-primary, #7C3AED)' }} />
              <span>{websiteName || 'DriveX'}</span>
            </Brand>
            <Description>
              {description || 'Providing premium car rental services across the country. Your journey, our priority. Safe, comfortable, and reliable vehicles for all your needs.'}
            </Description>
            <SocialRow>
              {socialMedia && socialMedia.map((social, index) => (
                <SocialIcon key={index} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                  {socialIconMap[social.icon] || <FaFacebookF />}
                </SocialIcon>
              ))}
            </SocialRow>
          </FooterCol>

          <FooterCol>
            <Title>Quick Links</Title>
            <FooterLinks>
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/cars">Our Fleet</FooterLink>
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/reviews">Reviews</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
            </FooterLinks>
          </FooterCol>

          <FooterCol>
            <Title>Our Fleet Categories</Title>
            <FooterLinks>
              <Link to="/cars" className="text-decoration-none text-muted footer-link d-block">Luxury SUVs</Link>
              <Link to="/cars" className="text-decoration-none text-muted footer-link d-block">Premium Sedans</Link>
              <Link to="/cars" className="text-decoration-none text-muted footer-link d-block">High Performance</Link>
              <Link to="/cars" className="text-decoration-none text-muted footer-link d-block">Executive Cars</Link>
            </FooterLinks>
          </FooterCol>

          <FooterCol>
            <Title>Contact Info</Title>
            <ContactInfoList>
              <ContactItem>
                <FaMapMarkerAlt />
                <span>{address || "Shopper's Plaza, Chimanlal Girdharlal Rd, Opp Municipal Market, Navrangpura, Ahmedabad, Gujarat 380009"}</span>
              </ContactItem>
              <ContactItem>
                <FaPhoneAlt />
                <span>{phone || '+91 78782 89727'}</span>
              </ContactItem>
              <ContactItem>
                <FaEnvelope />
                <span>{email || 'drivex007@gmail.com'}</span>
              </ContactItem>
            </ContactInfoList>
          </FooterCol>
        </FooterGrid>

        <Divider />

        <BottomRow>
          <Copyright>{copyright || `© ${new Date().getFullYear()} DriveX Car Rentals. All Rights Reserved.`}</Copyright>
          <LegalLinks>
            <Link to="/privacy-policy" className="text-decoration-none text-muted footer-link">Privacy Policy</Link>
            <Link to="/terms-conditions" className="text-decoration-none text-muted footer-link">Terms of Service</Link>
          </LegalLinks>
        </BottomRow>
      </Container>
    </Footer>
  );
}

export default CustomerFooter;
