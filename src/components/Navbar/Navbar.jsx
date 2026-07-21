import React, { useRef } from 'react';
import './Navbar.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Navbar = () => {
  const navRef = useRef(null);

  useGSAP(() => {
    gsap.to(navRef.current, {
      backgroundColor: '#FFF3E0',
      boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
      duration: 0.4,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: 'body',
        start: 'top -50',
        toggleActions: 'play none none reverse',
      }
    });
  });

  return (
    <div className='nav-parent'>
      <div className='nav' ref={navRef}>
        <div className='cravings-text'>
          <div className='cravings-logo'>
            <img src="/logo/logo1.png" alt="logo" />
          </div>
          <div><h1>Cravings</h1></div>
        </div>
        <div className="links">
          <a href="#menu">Menu</a>
          <a href="#about">About</a>
          <a href="#features">Features</a>
          <a href="#footer">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;