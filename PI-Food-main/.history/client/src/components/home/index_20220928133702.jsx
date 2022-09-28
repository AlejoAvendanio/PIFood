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
import { getDiets, getFood, getNameQuery } from '../../redux/actions'
import { useEffect } from "react"
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { Loader } from '../loader/loader'

export const favorite =[]; 

//memo = memoriza el componente si no tiene ningun cambio
const Home= ()=> {
  const {diets, food} = useDietsAndFoodGet()
  const {paginado, foodPerPage , currentFood, setCurrentPage} = usePaginate()
  const {handleOrderByName,handleOrderByScore,handleRecipeCreate, handleOption} = UseFilter()
  const [loading,setLoading] = useState(false)
  const dispatch = useDispatch()

  useEffect(()=>{
    if(!food.length){setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },2000)}
    dispatch(getDiets())
    dispatch(getFood())
    dispatch(getNameQuery())
    },[dispatch,getDiets,getFood,getNameQuery])

  return (
    <div className='home'>
      
      <div className='divHeder'>
        <section>
          <SearchBar setCurrentPage={setCurrentPage}/>
          <Link to='/'><div className='divImgHome'><img src={ico} /><h1>PI Foods</h1></div></Link>
          <div ><Link to={'/create_repice'}>Create Repice</Link><Link to={'/favorites'}>Favorites</Link></div>
        </section>
{/* ------------------------order Diet-------------------------98 */}
      <div>
        <select onChange={(e)=>handleOption(e)}>
          <option value='All'>All</option>
          {
            diets?.map(d=><option key={d.id} value={d.name} >{d.name}</option>)
          }
        </select>
{/* ------------------------order Name------------------------- */}
        <select onChange={(e)=>handleOrderByName(e)}>
          <option value='All'>All</option>
          <option value='ASCENDENTE'>A-Z</option>
          <option value='DESCENDENTE'>Z-A</option>
        </select>
{/* ------------------------order Score------------------------- */}
      <select onChange={(e)=>handleOrderByScore(e)}>
        <option value='All'>All</option>
        <option value='ASCENDENTE'>Min-Score</option>
        <option value='DESCENDENTE'>Max-Score</option>
      </select>
{/* ------------------------order recipe create------------------------- */}
        <select onChange={(e)=>handleRecipeCreate(e)}>
          <option value='All'>All</option>
          <option value='CREATE'>Recipe Create</option>
        </select>
      </div>
    </div>
    <div className='imageFont'></div>
    {loading && <Loader/>}
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
            favorite={element.favorite}
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

export default Home;