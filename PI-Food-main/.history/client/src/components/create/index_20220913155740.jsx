import React from 'react'
import { Link } from 'react-router-dom'

export default function Create() {
  return (
    <div>
        <header>    
            <Link to={'/home'}>Home</Link>  
        </header>
        <section>
            <form>
                <input type="text" name="title" id="" />
                <input type="url" name="image" id="" />
                <input type="text" name="diets" id="" />
                <input type="text" name="summary" id="" />
                <input type="number" name="healthScore" id="" />
                <input type="text" name="instruction" id="" />
                <button type='submit'>submit</button>
            </form>
        </section>
    </div>
  )
}
