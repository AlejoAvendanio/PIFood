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
        <p>Diets:<ul>{diets.map(e=><li key={e}>{e}</li>)}</ul></p>
        <p >Health Score: <b>{healthScore}</b></p>
      </div>
      <footer>
        <Link to={`/detail/${id}`}>Details</Link></footer>
    </div>
  )
}
