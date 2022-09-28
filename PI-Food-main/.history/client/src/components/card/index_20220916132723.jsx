import React from 'react'
import { Link } from 'react-router-dom'

export default function Card({id,title,img,diets,healthScore}) {
  return (
    <div>
      {
        console.log(diets)
      }
      <h3>{title}</h3>
      <img src={img} alt={title}/>
      <p>Diets:{diets.dataValues? 
        diets.dataValues.map(e=>e.name)
        : diets.map(e=><p key={e}>{e}</p>)}</p>
      <p>{healthScore}</p>
      <Link to={`/detail/${id}`}>Details</Link>
    </div>
  )
}
