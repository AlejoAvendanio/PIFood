import React from 'react'
import { useDispatch } from 'react-redux'
import { addFavorite, removeFavorites } from '../../redux/actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import { useDietsAndFoodGet } from '../customHooks/useDietsAndFoods'
import { useState } from 'react'
import { useEffect } from 'react'
// import { faHeart } from '@fortawesome/free'

export default function Fav({id}) {
    const dispatch = useDispatch()
    const {favorites} = useDietsAndFoodGet()
    const [state , setState] = useState("removeFavorite")
    useEffect(()=>{
      setState({
        ...state
      })
    },[setState])
    const handleClick=()=>{
      const esta=favorites?.some(el=>el.id ===id)
      if(!esta){
        dispatch(addFavorite(id))
        setState('removeFavorite')
        alert('add favorites')
      }
      else{
        dispatch(removeFavorites(id))
        setState('addFavorite')
        alert('remove favorites')
      }
    }

  return (
    <button onClick={handleClick} className={state}>
        <FontAwesomeIcon className='icono' icon={faBookmark} />
    </button>
  )
}
