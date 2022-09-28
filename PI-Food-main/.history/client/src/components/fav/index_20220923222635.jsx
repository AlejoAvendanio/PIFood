import React from 'react'
import { useDispatch } from 'react-redux'
import { addFavorite } from '../../redux/actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import { useDietsAndFoodGet } from '../customHooks/useDietsAndFoods'
// import { faHeart } from '@fortawesome/free'

export default function Fav({id}) {
    const dispatch = useDispatch()
    const {favorites} = useDietsAndFoodGet()

    const handleClick=()=>{
      let esta=favorites?.some(el=>el.id ===id)
      esta?
        dispatch(addFavorite(id))
        : favorites?.filter(el=>el.id!=id)
    }
  return (
    <button onClick={handleClick} className="addFavorite">
        <span ><FontAwesomeIcon className='icon' icon={faBookmark} /></span>
    </button>
  )
}
