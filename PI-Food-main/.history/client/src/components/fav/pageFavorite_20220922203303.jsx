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
                <b> <span>favorite recipe</span></b>
            </header>
            <section>
                <div>{
                    favorites?.map(el=><article><Card img={el.image} title={el.title} diets={el.diets} healthScore={el.healthScore}/></article>) || <b>Sin favoritos</b>
                }</div>
            </section>
        </div>   
    )
}
