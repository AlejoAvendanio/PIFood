import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addFavorite, removeFavorites } from '../../redux/actions'
import { useDietsAndFoodGet } from './useDietsAndFoods'

export default function UseFavorite({id}) {
    const dispatch = useDispatch()
    const {favorites ,} = useDietsAndFoodGet()
    const [state , setState] = useState("removeFavorite")
    useEffect(()=>{
        setState(
        state
        )
    },[setState])
    const handleClick=()=>{
        const esta=favorites?.some(el=>el.id ===id)
        if(!esta ){
        dispatch(addFavorite(id))
        setState('addFavorite')
        alert('add favorite')
        }
        else{
        dispatch(removeFavorites(id))
        setState('removeFavorite')
        alert('remove favorite')
        }
    }
    return {handleClick,state}
}
