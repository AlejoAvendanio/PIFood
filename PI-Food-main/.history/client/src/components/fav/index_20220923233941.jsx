import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addFavorite, removeFavorites } from '../../redux/actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import { useDietsAndFoodGet } from '../customHooks/useDietsAndFoods'
// import { faHeart } from '@fortawesome/free'

export default function Fav({id}) {
    const dispatch = useDispatch()
    const {favorites} = useDietsAndFoodGet()
    let esta=favorites?.some(el=>el.id ===id)

    const handleClick=()=>{
      if(!esta){
        dispatch(addFavorite(id))
        alert('add favorites')
      }
      else{
        dispatch(removeFavorites(id))
        alert('remove favorites')
      }
    }

  return (
    <button onClick={handleClick} className={!esta? 'removeFavorite' : 'addFavorite'}>
        <FontAwesomeIcon className='icono' icon={faBookmark} />
    </button>
  )
}
