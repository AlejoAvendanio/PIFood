import React from 'react'
import { useSelector } from 'react-redux'

export default function Home() {
  const food = useSelector(f=>f.food) 

  return (
    <div>
      {
        console.log(food)
      }

    </div>
  )
}
