import React from 'react'
import Card from '../card'
import { useDietsAndFoodGet } from '../customHooks/useDietsAndFoods'
import './pageFavoriteStyles.css'
export default function PageFavorite() {
    const {favorites} = useDietsAndFoodGet()
    console.log(favorites)
    return (
    <div>{
        favorites?.map(el=><Card img={el.image} title={el.title} diets={el.diets} healthScore={el.healthScore}/>) || <b>Sin favoritos</b>
        }</div>
    )
}
