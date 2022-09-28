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
                    favorites?.map(element =>{
                        let title = element.title.split(' ')//acorto los titulos de las comidas solo por estetica
                        title = title[0] //tomo el primer elemento del arreglo para que sea string
                        title= title.replace(',','')//elimino la coma de algunos elementos 
                    return(
                        <Card 
                        title={title}
                        diets={element.diets?.[0]?.name ? element.diets.map(e=>e.name) : element.diets}
                        healthScore={element.healthScore }
                        id={element.id }
                        img={element.image }
                        key={element.id}
                        />
                    )})
                }
                </div>
            </section>
        </div>   
    )
}
