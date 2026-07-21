import React, { useRef } from 'react'
import testimonials from '../../../data/testimonials'
import './Testimonials.css'


import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Testimonials = () => {
  const testimonialsMain = useRef(null)
  
  useGSAP(()=>{
    ScrollTrigger.refresh()
    gsap.fromTo(gsap.utils.toArray('.testimonial-cards'),
      {
        opacity: 0,
        y: 100,
      },
      {
        stagger: 0.5,
        opacity: 1,
        y: 0,
        clearProps: "transform",
        scrollTrigger: {
        trigger: testimonialsMain.current, 
        start: 'top 100%',
      }
      }
    )
  })







  return (
    <div ref={testimonialsMain} className='testimonials-main' id='testimonials'>
      <h1>Testimonials</h1>
    <div className="testimonial-cards-container">

      {testimonials.map((item, idx) => {
        return(
           <div className="testimonial-cards" key={idx}>
        <p className='review review-name'>{item.name}</p>
        <p className=' review review-quote'>{item.quote}</p>
        <p className='review review-rating'>{item.rating}</p>

      </div>
        )
        
      })}


    </div>
     
    </div>
  )
}

export default Testimonials