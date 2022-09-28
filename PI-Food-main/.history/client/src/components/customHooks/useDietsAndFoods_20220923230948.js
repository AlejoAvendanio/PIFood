import { useEffect } from "react"
import { useSelector } from "react-redux"
import { getDiets, getFood } from "../../redux/actions"

export function useDietsAndFoodGet(){
    const food = useSelector(f=>f.allFoods) 
    const diets = useSelector(f=>f.diets) 
    const favorites = useSelector(f=>f.favorites)
    console.log(favorites)
    return{
        food,
        diets,
        favorites
    }
}