import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getDiets, getFood } from "../../redux/actions"

export function useDietsAndFoodGet(){
    const food = useSelector(f=>f.allFoods) 
    const diets = useSelector(f=>f.diets) 
    const favorites = useSelector(f=>f.favorites)
    const dispatch = useDispatch()
    console.log(favorites)

    useEffect(()=>{
    dispatch(getDiets())
    dispatch(getFood())
    },[])
    return{
        food,
        diets,
        favorites
    }
}