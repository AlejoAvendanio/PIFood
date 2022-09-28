import { useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
import { getDiets, getFood } from "../../redux/actions"



export default function useDietsAndFoodGet(){
    const food = useSelector(f=>f.allFoods) 
    const diets = useSelector(f=>f.diets) 
    const favorites = useSelector(f=>f.favorites)
    console.log(favorites)
    const dispatch = useDispatch()
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