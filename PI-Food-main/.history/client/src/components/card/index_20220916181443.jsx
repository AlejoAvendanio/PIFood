import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'
export default function Card({id,title,img,diets,healthScore}) {
  return (
    <div>
      {
        console.log(diets)
      }
      <h3>{title}</h3>
      <img src={img} alt={title}/>
      <p>Diets:{diets.map(e=><p key={e}>{e}</p>)}</p>
      <p>Health Score: <b>{healthScore}</b></p>
      <Link to={`/detail/${id}`}>Details</Link>
    </div>
  )
}
