import React from 'react'
import './FoodCards.css'
import foodItems from '../../../data/menuItems' 

const FoodCards = (props) => {
  return (
    <>
    {props.details.map((item,index) => {
       return <div className='foodcard' key={index}>
        <div className='food-img-cont'>
        <img src={item.path} alt="foodImage" />
        </div>
        <h2 className="food-name">{item.name}</h2>
        <p className="price">{item.price}</p>
        <p className="description">{item.desc}</p>
      </div>
    })}
    
    </>
  )
}

export default FoodCards