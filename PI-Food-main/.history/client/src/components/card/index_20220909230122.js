import React from 'react'

export default function Card({id,title,img,vegetarian,vegan,glutenFree,dairyFree}) {
  return (
    <div>
      <h3>{title}</h3>
      <img src={img} alt={title}/>
      <p>Vegetarian: {vegetarian}</p>
      <p>Vegan: {vegan}</p>
      <p>Gluten Free: {glutenFree}</p>
      <p>Dairy Free: {dairyFree}</p>
    </div>
  )
}
