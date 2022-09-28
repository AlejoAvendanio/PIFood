import { useSelector } from "react-redux"

export function useDietsAndFoodGet(){
    const food = useSelector(f=>f.allFoods) 
    const diets = useSelector(f=>f.diets) 
    const favorites = useSelector(f=>f.favorites)
    const allFoods = useSelector(f=>f.food)
    return{
        food,
        diets,
        favorites,
        allFoods
    }
}