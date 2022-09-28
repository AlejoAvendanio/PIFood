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
    let claseApply = 'removeFavorite'
    function clase(){
      if(esta){
        return claseApply = 'removeFavorite'
      }
      else{
        return claseApply = 'addFavorite'
      }
    }

    const handleClick=()=>{
      if(!esta){
        dispatch(addFavorite(id))
        clase()
        alert('add favorites')
      }
      else{
        dispatch(removeFavorites(id))
        clase()
        alert('remove favorites')
      }
    }

  return (
    <button onClick={handleClick} className={claseApply}>
        <FontAwesomeIcon className='icono' icon={faBookmark} />
    </button>
  )
}
