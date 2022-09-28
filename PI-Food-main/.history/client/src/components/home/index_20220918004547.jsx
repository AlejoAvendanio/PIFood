import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { filterByDiets, getDiets, getFood, orderByName, orderByScore} from '../../redux/actions'
import Card from '../card'
import SearchBar from '../navbar'
import Paginado from '../paginado/paginado'
import './styles.css'

const INITIAL_PAGE = 1

export default function Home() {
  const food = useSelector(f=>f.foods) 
  const diets = useSelector(f=>f.diets) 
  const dispatch = useDispatch()
  const [option, setOption] = useState("")

//-------------paginado------------

const [ currentPage , setCurrentPage ] = useState(INITIAL_PAGE) //estado inicial
const foodPerPage  = 9 //se setea la cantidad de razas por pagina
const lastFood  = currentPage * foodPerPage //en un principio es 9
const firstFood = lastFood - foodPerPage // 0
const currentFood = food.slice(firstFood,lastFood)// p:1 ------0-------9 = p2:------9------17

const paginado = (pageNumber)=>{
    setCurrentPage(pageNumber)
}
//-------------paginado------------

  useEffect(()=>{
    dispatch(getFood())
    dispatch(getDiets())
  },[dispatch])

  const handleOption =(e)=>{
    e.preventDefault()
    dispatch(filterByDiets(e.target.value))
    setCurrentPage(1)
    setOption(e.target.value)
  }

const handleOrderByName = (e)=>{
  e.preventDefault()
    dispatch(orderByName(e.target.value))
    setOption(e.target.value)
}

const handleOrderByScore = (e)=>{
  e.preventDefault()
    dispatch(orderByScore(e.target.value))
    setOption(e.target.value)
}

  return (
    <div className='home'>
      <div className='divHeder'>
        <section>
          <SearchBar setCurrentPage={setCurrentPage}/>
          <h1>PI Foods</h1>
          <div><Link to={'/create_repice'}>Create Repice</Link></div>
        </section>
{/* ------------------------order Diet------------------------- */}
        <div>
          <select onChange={handleOption}>
            <option defaultValue='All'>All</option>
            {
              diets?.map(d=><option key={d.id} value={d.name} >{d.name}</option>)
            }
          </select>
{/* ------------------------order Name------------------------- */}

          <select onChange={handleOrderByName}>
            <option value='ASCENDENTE'>A-Z</option>
            <option value='DESCENDENTE'>Z-A</option>
          </select>
{/* ------------------------order Score------------------------- */}
          <select onChange={handleOrderByScore}>
            <option value='ASCENDENTE'>Min-Score</option>
            <option value='DESCENDENTE'>Max-Score</option>
          </select>
        </div>
      </div>
      <div className='imageFont'><img src='https://img.freepik.com/vector-gratis/fondo-twitch-recetas-veganas-dibujadas-mano_23-2149148288.jpg?w=2000'/></div>
      <div className='divSectionHome'>
        {
          currentFood?.map(element =>{
            let title = element.title.split(' ')
            title = title[0]
          return(
          <Card 
          title={title[0] }
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
