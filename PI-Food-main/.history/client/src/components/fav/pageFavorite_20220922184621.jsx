import React from 'react'
import { useDietsAndFoodGet } from '../customHooks/useDietsAndFoods'

export default function PageFavorite() {
    const {favorite} = useDietsAndFoodGet()
  return (
    <div>{
        favorite?.map(el=><Card img={el.image} title={el.title} diets={el.diets} healthScore={el.healthScore}/>) || <b>Sin favoritos</b>
        }</div>
  )
}
