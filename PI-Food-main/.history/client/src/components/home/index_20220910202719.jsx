import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterByDiets, getDiets, getFood, orderByName, orderByScore} from '../../redux/actions'
import Card from '../card'
import SearchBar from '../navbar'
import './styles.css'
export default function Home() {
  const food = useSelector(f=>f.foods) 
  const diets = useSelector(f=>f.diets) 
  const dispatch = useDispatch()
  const [option, setOption] = useState("")
  useEffect(()=>{
    dispatch(getFood())
    dispatch(getDiets())
  },[dispatch])

  const handleOption =(e)=>{
    e.preventDefault()
    dispatch(filterByDiets(e.target.value))
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
    <div>
      <div>
        <SearchBar/>
        
        <select onChange={handleOption}>
          <option defaultValue='All'>All</option>
          {
            diets?.map(d=><option key={d.id} value={d.name} >{d.name}</option>)
          }
        </select>
        
        <select onChange={handleOrderByName}>
          <option value='ASCENDENTE'>ASCENDENTE</option>
          <option value='DESCENDENTE'>DESCENDENTE</option>
        </select>
        
        <select onChange={handleOrderByScore}>
          <option value='ASCENDENTE'>ASCENDENTE</option>
          <option value='DESCENDENTE'>DESCENDENTE</option>
        </select>

      </div>
      <div className='home'>
        {
          food?.map(element =>{
          return(
          <Card 
          title={element.title}
          diets={element.diets}
          id={element.id}
          img={element.image}
          key={element.id}
          />
          )})
        }
      </div>
    </div>
  )
}
