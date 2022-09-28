import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../card'
import { useDietsAndFoodGet } from '../customHooks/useDietsAndFoods'
import './pageFavoriteStyles.css'

export default function PageFavorite() {
    const {favorites} = useDietsAndFoodGet()
    console.log(favorites)
    return (
        <div className='pageFavDiv'>
            <header>
                <Link to={'/home'}>Home</Link>
                <h1> favorite recipe</h1>
            </header>
            <section>
                <div>{
                    favorites?.map(el=><Card img={el.image} title={el.title} diets={el.diets} healthScore={el.healthScore}/>) || <b>Sin favoritos</b>
                }</div>
            </section>
        </div>   
    )
}
