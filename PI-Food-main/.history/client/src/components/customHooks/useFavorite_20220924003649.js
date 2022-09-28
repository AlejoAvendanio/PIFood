import React, { useEffect, useState } from 'react'
import { addFavorite, removeFavorites } from '../../redux/actions'
import { useDietsAndFoodGet } from './useDietsAndFoods'

export default function UseFavorite() {
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
        }
        else{
        dispatch(removeFavorites(id))
        setState('removeFavorite')
        }
    }
    return {handleClick,state}
}
