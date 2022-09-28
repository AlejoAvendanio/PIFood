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
    let esta=favorites?.some(el=>el.id ===id)
    let clas = 'removeFacorite'

    const handleClick=()=>{
      if(!esta){
        clas = 'addFavorite'
        dispatch(addFavorite(id))
        alert('add favorites')
      }
      else{
        clas = 'removeFavorite'
        dispatch(removeFavorites(id))
        alert('remove favorites')
      }
    }

  return (
    <button onClick={handleClick} className={clas}>
        <FontAwesomeIcon className='icono' icon={faBookmark} />
    </button>
  )
}
