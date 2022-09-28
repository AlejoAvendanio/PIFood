import React from 'react'
import { Link } from 'react-router-dom'
import Fav from '../fav'
import './styles.css'
export default function Card({id,title,img,diets,healthScore}) {
  return (
    <div className='card'>
      
      <h3 className='h3'>{title}</h3>
      <div className='imgFav'>
      <img src={img} alt={title}/>
      <div className='favorite'><Fav id={id}/></div>
      </div>
      <div className='divCardInfo'>
        <p>Diets:<ul>{diets.map(e=><li key={e}>{e}</li>)}</ul></p>
        <p className='pCardHealth'>Health Score: <b>{healthScore}</b></p>
      </div>
      <footer>
        <Link to={`/detail/${id}`}>Details</Link></footer>
    </div>
  )
}
