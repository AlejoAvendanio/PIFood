import React from 'react'
import { useDispatch } from 'react-redux'
import { addFavorite } from '../../redux/actions'

export default function Fav({id}) {
    const dispatch = useDispatch()
    const handleClick=()=>{
        dispatch(addFavorite(id))
    }
  return (
    <button onClick={handleClick}>
        <span >corazon</span>
    </button>
  )
}
