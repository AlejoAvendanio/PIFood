import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFood } from '../../redux/actions'
import Card from '../card'
export default function Home() {
  const food = useSelector(f=>f.foods) 
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getFood())
  },[dispatch])

  return (
    <div>
      {
        food?.map(element =>{
        return(
        <Card 
        title={element.title}
        vegetarian={element.vegetarian}
        vegan={element.vegan}
        glutenFree={element.glutenFree}
        dairyFree={element.dairyFree}
        id={element.id}
        img={element.image}
        key={element.id}
        />
        )})
      }

    </div>
  )
}
