import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addFavorite, removeFavorites } from '../../redux/actions'
import { useDietsAndFoodGet } from './useDietsAndFoods'

export default function UseFavorite({favorite,id}) {
    const dispatch = useDispatch()
    const {favorites ,allFoods} = useDietsAndFoodGet()
    const [state , setState] = useState("removeFavorite")
    useEffect(()=>{
        setState(
        state
        )
    },[setState])
    const handleClick=()=>{
        const esta=favorites?.some(el=>el.id ===id)
        if(!esta && !favorite){
        allFoods.forEach(element => {
            element.id ===id
            element.favorite = true
        });
        dispatch(addFavorite(id))
        setState('addFavorite')
        }
        else{
            favorite=false
        dispatch(removeFavorites(id))
        setState('removeFavorite')
        }
    }
    return {handleClick,state}
}
