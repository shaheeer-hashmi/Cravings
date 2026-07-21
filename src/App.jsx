import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Menu from './components/Menu/Menu';
import About from './components/About/About';
import Features from './components/Features/Features';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const App = () => {
  useGSAP(() => {
    gsap.to('body', {
      backgroundColor: '#FFF3E0',
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.5,
      }
    });
  });

  return (
    <div>
      <Navbar />
      <Hero />
      <Menu />
      <About />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;