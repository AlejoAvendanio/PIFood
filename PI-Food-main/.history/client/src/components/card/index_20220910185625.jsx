import React from 'react'

export default function Card({id,title,img,diets}) {
  return (
    <div>
      <h3>{title}</h3>
      <img src={img} alt={title}/>
      <p>Diets:{diets.map(e=><span>{e}</span>)}</p>
    </div>
  )
}
