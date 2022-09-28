import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFood } from '../../redux/actions'

export default function Home() {
  const food = useSelector(f=>f.foods) 
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getFood())
  },[dispatch])

  return (
    <div>
      {
        console.log(food)
      }

    </div>
  )
}
