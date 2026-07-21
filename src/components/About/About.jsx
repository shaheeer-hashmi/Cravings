import React, { useRef } from 'react'
import "./About.css"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

const About = () => {



 const aboutWrapper = useRef(null)
 const aboutLeft = useRef(null)
 const aboutRight = useRef(null)



   useGSAP(()=>{
      ScrollTrigger.refresh()
      gsap.fromTo(aboutLeft.current,{
        opacity: 0, x:-100
      },
       {opacity: 1, 
        x:0,
        duration: 1.5,
        scrollTrigger:{trigger:aboutWrapper.current, start: 'top 50%',}
      }
      )
      gsap.fromTo(aboutRight.current,{
        opacity: 0, x:100
      },
       {opacity: 1, 
        x:0,
        duration: 1.5,
        scrollTrigger:{trigger:aboutWrapper.current, start: 'top 50%',}
      }
      )
    })




  return (
    <>
    <div ref={aboutWrapper} className='about-wrapper' id='about'>
    <div ref={aboutLeft} className='about-column-left'>
      <div className="image1">
      <img src="/about/restraunt1.jpg" alt="restraunt image1" srcset="" />
      </div>
      <div className='image2'>
      <img src="/about/restraunt2.jpg" alt="restraunt image2" srcset="" />
      </div>
    </div>
    <div ref={aboutRight} className='about-column-right'>
      <div className="about-text">
        <p className='our-story'>OUR STORY</p>
        <h2>Crafted For Every Craving</h2>
        <p>At Cravings, we believe great food has a way of bringing people together. What started as a simple passion for creating delicious, comforting meals has grown into a place where friends gather, families celebrate, and every guest feels at home.
Our menu is inspired by the flavors people love most—fresh ingredients, carefully prepared dishes, and recipes made to satisfy every craving. Whether you're joining us for a quick lunch, a special dinner, or a sweet treat, every visit is designed to be memorable.
More than just a restaurant, Cravings is a welcoming space where good food, warm hospitality, and shared moments come together around the table.</p>
      </div>
    </div>
    </div>
    </>
  )
}

export default About