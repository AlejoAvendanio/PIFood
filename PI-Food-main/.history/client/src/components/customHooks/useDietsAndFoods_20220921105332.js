import { useSelector } from "react-redux"

export function useDietsAndFoodGet(){
    const food = useSelector(f=>f.foods) 
    const diets = useSelector(f=>f.diets) 
    return{
        food,
        diets
    }
}