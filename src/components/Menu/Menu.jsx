import React, { useRef } from 'react'
import "./Menu.css"
import foodItems from '../../../data/menuItems' 
import FoodCards from './FoodCards'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Menu = () => {
  const menuRef = useRef(null)

  useGSAP(()=>{
    ScrollTrigger.refresh()
    gsap.fromTo(gsap.utils.toArray('.foodcard'),{
      opacity: 0, y:90
    },
     {opacity: 1, 
      y:0, 
      stagger: 0.30, 
      clearProps: "transform",
      scrollTrigger: {
        trigger: menuRef.current, 
        start: 'top 100%',
        scrub: 1.5,
        end: 'bottom 80%'
  
      }
    })
  })
  
  return (
    <>
    <div ref={menuRef} className='what-we-serve' id='menu'>
      
      <h1 className='serving-section-text'>What We Serve</h1>
    <div className='food-card-container'>
      <FoodCards  details={foodItems}/>
    </div>
    </div>
    </>
  )
}

export default Menu