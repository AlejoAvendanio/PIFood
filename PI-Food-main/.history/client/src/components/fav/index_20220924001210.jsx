import React from 'react'
import { useDispatch } from 'react-redux'
import { addFavorite, removeFavorites } from '../../redux/actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import { useDietsAndFoodGet } from '../customHooks/useDietsAndFoods'
// import { faHeart } from '@fortawesome/free'

export default function Fav({id}) {
    const dispatch = useDispatch()
    const {favorites} = useDietsAndFoodGet()
    const add = 'removeFavorite'
    const remove = 'addFavorite'

    const handleClick=()=>{
      let esta=favorites?.some(el=>el.id ===id)
      if(!esta){
        dispatch(addFavorite(id))
        alert('add favorites')
      }
      else{
        dispatch(removeFavorites(id))
        alert('remove favorites')
      }
    }
    console.log(clas)
  return (
    <button onClick={handleClick} className={esta? add : remove}>
        <FontAwesomeIcon className='icono' icon={faBookmark} />
    </button>
  )
}
