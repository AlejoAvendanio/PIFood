import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFood } from '../../redux/actions'
import Card from '../card'
import SearchBar from '../navbar'
import './styles.css'
export default function Home() {
  const food = useSelector(f=>f.foods) 
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getFood())
  },[dispatch])

  return (
    <div>
      <SearchBar/>
      <div className='home'>
        {
          food?.map(element =>{
          return(
          <Card 
          title={element.title}
          diets={element.diets.lenght?element.diets:'sin dieta'}
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
