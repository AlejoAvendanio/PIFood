import React from 'react'
import { Link } from 'react-router-dom'

export default function Create() {
  return (
    <div>
        <header>    
            <Link to={'/home'}>Home</Link>  
        </header>
        <section>
            <input type="text" name="title" id="" />
            <input type="text" name="image" id="" />
            <input type="text" name="diets" id="" />
            <input type="text" name="summary" id="" />
            <input type="text" name="healthScore" id="" />
            <input type="text" name="instruction" id="" />
        </section>
    </div>
  )
}
