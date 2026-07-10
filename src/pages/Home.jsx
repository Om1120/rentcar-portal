import React from 'react';
import Hero from '../components/Hero.jsx';
import Cars from '../pages/Cars.jsx';
import Services from '../components/Services.jsx';
import About from '../components/About.jsx';
import InquiryForm from '../components/InquiryForm.jsx';
import Testimonials from '../components/Testimonials.jsx';
import FAQ from '../components/FAQ.jsx';
import Contact from '../components/Contact.jsx';

function Home() {
  return (
    <div className="home-page">
      <Hero />
      <Cars />
      <Services />
      <About />
      <InquiryForm />
      <Testimonials />
      <FAQ />
      <Contact />
    </div>
  );
}

export default Home;
