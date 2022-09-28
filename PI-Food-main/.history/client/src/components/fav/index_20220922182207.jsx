import React from 'react'

export default function Fav({id}) {
    const handleClick=(e)=>{
        alert(id)
    }
  return (
    <button onClick={handleClick}>
        <span >corazon</span>
    </button>
  )
}
