import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../card'
import { useDietsAndFoodGet } from '../customHooks/useDietsAndFoods'
import SearchBar from '../navbar'
import Paginado from '../paginado/paginado'
import './styles.css'
import ico from '../img/icono.png'
import { UseFilter } from '../customHooks/useFilter'
import usePaginate from '../customHooks/usePaginate'

export const favorite =[]; 

export default function Home() {
  const {diets, food} = useDietsAndFoodGet()
  const {paginado, foodPerPage , currentFood, setCurrentPage} = usePaginate()
  const {handleOrderByName,handleOrderByScore,handleRecipeCreate, handleOption} = UseFilter()
  return (
    <div className='home'>
      <div className='divHeder'>
        <section>
          <SearchBar setCurrentPage={setCurrentPage}/>
          <Link to='/'><div className='divImgHome'><img src={ico} /><h1>PI Foods</h1></div></Link>
          <div ><Link to={'/create_repice'}>Create Repice</Link><Link>Favotires</Link></div>
        </section>
{/* ------------------------order Diet------------------------- */}
      <div>
        <select onChange={handleOption}>
          <option value='All'>All</option>
          {
            diets?.map(d=><option key={d.id} value={d.name} >{d.name}</option>)
          }
        </select>
{/* ------------------------order Name------------------------- */}
        <select onChange={handleOrderByName}>
          <option value='All'>All</option>
          <option value='ASCENDENTE'>A-Z</option>
          <option value='DESCENDENTE'>Z-A</option>
        </select>
{/* ------------------------order Score------------------------- */}
      <select onChange={handleOrderByScore}>
        <option value='All'>All</option>
        <option value='ASCENDENTE'>Min-Score</option>
        <option value='DESCENDENTE'>Max-Score</option>
      </select>
{/* ------------------------order recipe create------------------------- */}
        <select onChange={handleRecipeCreate}>
          <option value='All'>All</option>
          <option value='CREATE'>Recipe Create</option>
        </select>
      </div>
    </div>
    <div className='imageFont'></div>
    <div className='divSectionHome'>
        {
          currentFood?.map(element =>{
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
      <Paginado
        foodPerPage={foodPerPage}
        allFood={food.length}
        paginado={paginado}
      /> 
    </div>
  )
}
