import React from 'react'
import { Link } from 'react-router-dom'

export default function Card({id,title,img,diets,healthScore}) {
  return (
    <div>
      <h3>{title}</h3>
      <img src={img} alt={title}/>
      <p>Diets:{diets? 
        diets.map(e=><p key={e}>{e}</p>)
        : diets.dataValues.map(e=>e.name)}</p>
      <p>{healthScore}</p>
      <Link to={`/detail/${id}`}>Details</Link>
    </div>
  )
}
