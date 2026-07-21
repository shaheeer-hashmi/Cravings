import React, { useRef } from 'react';
import './Features.css';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MdOutlineEco } from "react-icons/md";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { GiCook } from "react-icons/gi";

const features = [
  { icon: <MdOutlineEco />, label: "Fresh Daily" },
  { icon: <MdOutlineDeliveryDining />, label: "Fast Delivery" },
  { icon: <MdOutlineRestaurantMenu />, label: "Made to Order" },
  { icon: <GiCook />, label: "Extremely Qualified Chefs" },
];

const Features = () => {
  const featuresPage = useRef(null);
  const featuresHeading = useRef(null);

  useGSAP(() => {
    gsap.fromTo(featuresHeading.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: featuresPage.current,
          start: 'top 60%',
        }
      }
    );

    gsap.fromTo(gsap.utils.toArray('.feature'),
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: featuresPage.current,
          scrub: 1.5,
          start: 'top 50%',
          end: 'bottom 70%',
        }
      }
    );

    ScrollTrigger.refresh();
  }, { scope: featuresPage });

  return (
    <div ref={featuresPage} className='features-page' id='features'>
      <h1 ref={featuresHeading} className='features-heading'>Our Features</h1>
      <div className="features-text">
        {features.map((item, idx) => (
          <div className='feature' key={idx}>
            <span className='icon'>{item.icon}</span>
            <p className='features-details'>{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;