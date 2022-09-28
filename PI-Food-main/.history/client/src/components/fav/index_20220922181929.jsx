import React from 'react'

export default function Fav() {
    const handleClick=(e)=>{
        alert('fav')
    }
  return (
    <button onClick={handleClick}>
        <span >corazon</span>
    </button>
  )
}
