import React from 'react'
import { useDispatch } from 'react-redux'

export default function Fav({id}) {
    const dispatch = useDispatch()
    const handleClick=(e)=>{
        alert(e.id)
        // dispatch(addFavorite(e.id))
    }
  return (
    <button onClick={handleClick}>
        <span >corazon</span>
    </button>
  )
}
