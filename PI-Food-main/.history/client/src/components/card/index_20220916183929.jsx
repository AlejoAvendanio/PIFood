import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'
export default function Card({id,title,img,diets,healthScore}) {
  return (
    <div className='card'>
      {
        console.log(diets)
      }
      <h3 className='h3'>{title}</h3>
      <img src={img} alt={title}/>
      <div className='p'>
        <p >Diets:{diets.map(e=><p key={e}>{e}</p>)}</p>
        <p >Health Score: <b>{healthScore}</b></p>
      </div>
        <Link to={`/detail/${id}`}>Details</Link>
    </div>
  )
}
