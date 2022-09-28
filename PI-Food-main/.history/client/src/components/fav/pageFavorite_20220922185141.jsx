import React from 'react'
import Card from '../card'
import { useDietsAndFoodGet } from '../customHooks/useDietsAndFoods'

export default function PageFavorite() {
    const {favorite} = useDietsAndFoodGet()
    console.log(favorite)
    return (
    <div>{
        favorite?.map(el=><Card img={el.image} title={el.title} diets={el.diets} healthScore={el.healthScore}/>) || <b>Sin favoritos</b>
        }</div>
    )
}
