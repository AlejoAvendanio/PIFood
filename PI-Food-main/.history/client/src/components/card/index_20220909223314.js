import React from 'react'

export default function Card({id,title,img}) {
  return (
    <div>
      <h3>{title}</h3>
      <img src={img} alt={title}/>
    </div>
  )
}
