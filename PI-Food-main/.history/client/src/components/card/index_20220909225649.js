import React from 'react'

export default function Card({id,title,img,vegetarian,vegan,glutenFree,dairyFree}) {
  return (
    <div>
      <h3>{title}</h3>
      <img src={img} alt={title}/>
      <span>{vegetarian}</span>
      <span>{vegan}</span>
      <span>{glutenFree}</span>
      <span>{dairyFree}</span>

    </div>
  )
}
