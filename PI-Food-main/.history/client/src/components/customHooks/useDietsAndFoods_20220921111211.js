import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getDiets } from "../../redux/actions"

export function useDietsAndFoodGet(){
    const food = useSelector(f=>f.foods) 
    const diets = useSelector(f=>f.diets) 
    const dispatch = useDispatch()
    useEffect(()=>{
    dispatch(getDiets())
    },[])
    return{
        food,
        diets
    }
}