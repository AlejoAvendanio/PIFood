import { useSelector } from "react-redux"

export function useDietsAndFoodGet(){
    const food = useSelector(f=>f.allFoods) 
    const diets = useSelector(f=>f.diets) 
    const favorites = useSelector(f=>f.favorites)
    return{
        food,
        diets,
        favorites
    }
}