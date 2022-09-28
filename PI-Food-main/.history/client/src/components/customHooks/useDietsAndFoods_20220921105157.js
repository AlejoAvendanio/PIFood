import React from "react"
import { useSelector } from "react-redux"

export function useDietsGet(){
    const food = useSelector(f=>f.foods) 
    const diets = useSelector(f=>f.diets) 
    return{
        food,
        diets
    }
}