import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDiets, getFood } from '../../redux/actions'
import Card from '../card'
import SearchBar from '../navbar'
import './styles.css'
export default function Home() {
  const food = useSelector(f=>f.foods) 
  const diets = useSelector(f=>f.diets) 
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getFood())
    dispatch(getDiets())
  },[dispatch])

  return (
    <div>
      <div>
        <SearchBar/>
        <select>
          <option>type diets</option>
          {
            diets?.map(d=><option value={d.name} >{d.name}</option>)
          }
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
