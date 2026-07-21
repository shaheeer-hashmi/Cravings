import React, { useRef } from 'react';
import './Hero.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

const Hero = () => {
  const headingRef = useRef(null)
  const buttonRef = useRef(null)
  const sloganRef = useRef(null)
  const bgRef = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })

    tl.fromTo(headingRef.current, { opacity: 0, y: 120 }, { opacity: 1, y: 0, duration: 1.5 })
    tl.fromTo(sloganRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1.2 }, '-=0.4')
    tl.fromTo(buttonRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1 }, '-=0.2')

    gsap.to(bgRef.current, {
      backgroundColor: '#E8D5B7',
      scrollTrigger: {
        trigger: bgRef.current,
        start: 'top -50',
        toggleActions: 'play none none reverse',
      }
    })
  })

  const handleMenuClick = () => {
    setTimeout(() => {
      document.querySelector('#menu').scrollIntoView({ behavior: 'smooth' });
    }, 250);
  };

  return (
    <div ref={bgRef} className='bg' id='home'>
      <div className='main'>
        <h1 ref={headingRef} className='cravings-hero'>Cravings</h1>
        <p ref={sloganRef} className='cravings-slogan'>Where every bite feels right!</p>
        <button ref={buttonRef} className='explore-the-menu-btn' onClick={handleMenuClick}>
          Explore The Menu
        </button>
      </div>
    </div>
  );
};

export default Hero;