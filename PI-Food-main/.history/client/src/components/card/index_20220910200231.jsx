import React from 'react'

export default function Card({title,img,diets}) {
  return (
    <div>
      <h3>{title}</h3>
      <img src={img} alt={title}/>
      <span>Diets:{diets.map(e=><p key={e}>{e}</p>)}</span>
    </div>
  )
}
