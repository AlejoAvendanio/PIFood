import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addFavorite, removeFavorites } from '../../redux/actions'
import { useDietsAndFoodGet } from './useDietsAndFoods'

export default function UseFavorite({favorite,id}) {
    const dispatch = useDispatch()
    const {favorites} = useDietsAndFoodGet()
    const [state , setState] = useState("removeFavorite")
    useEffect(()=>{
        setState(
        state
        )
    },[setState])
    const handleClick=()=>{
        const esta=favorites?.some(el=>el.favorite ===favorite)
        if(!esta){
        dispatch(addFavorite(id))
        setState('addFavorite')
        }
        else{
        dispatch(removeFavorites(id))
        setState('removeFavorite')
        }
    }
    return {handleClick,state}
}
