import React from 'react'
import { useDispatch } from 'react-redux'
import { addFavorite } from '../../redux/actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-ligth-svg-icons'

export default function Fav({id}) {
    const dispatch = useDispatch()
    const handleClick=()=>{
        dispatch(addFavorite(id))
        alert('Add Favorite')
    }
  return (
    <button onClick={handleClick} className="addFavorite">
        <span ><FontAwesomeIcon icon={faHeart} /></span>
    </button>
  )
}
