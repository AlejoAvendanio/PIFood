import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addFavorite, removeFavorites } from '../../redux/actions'
import { useDietsAndFoodGet } from '../customHooks/useDietsAndFoods'
import Fav from '../fav'
import './styles.css'
export default function Card({id,title,img,diets,healthScore}) {
  const dispatch = useDispatch()
    const {favorites} = useDietsAndFoodGet()
    const [state , setState] = useState("removeFavorite")
    useEffect(()=>{
      setState(
        state
      )
    },[setState])
    const handleClick=()=>{
      const esta=favorites?.some(el=>el.id ===id)
      if(!esta){
        dispatch(addFavorite(id))
        setState('addFavorite')
        // alert('add favorites')
      }
      else{
        dispatch(removeFavorites(id))
        setState('removeFavorite')
      }
    }

  return (
    <div className='card'>
      
      <h3 className='h3'>{title}</h3>
      <div className='imgFav'>
        <img src={img} alt={title}/>
        <div className='favorite'>
          <button onClick={handleClick} className={state}>
            <FontAwesomeIcon className='icono' icon={faBookmark} />
          </button>
      </div>
      </div>
      <div className='divCardInfo'>
        <p>Diets:<ul>{diets.map(e=><li key={e}>{e}</li>)}</ul></p>
        <p className='pCardHealth'>Health Score: <b>{healthScore}</b></p>
      </div>
      <footer>
        <Link to={`/detail/${id}`}>Details</Link></footer>
    </div>
  )
}
