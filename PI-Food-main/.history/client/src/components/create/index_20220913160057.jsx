import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Create() {
    const diets = useSelector(e=>e.diets)
  return (
    <div>
        <header>    
            <Link to={'/home'}>Home</Link>  
        </header>
        <section>
            <form>
                <input type="text" name="title" id="" />
                <input type="url" name="image" id="" />
                <select>
                    <option value="diets">diets</option>
                    {
                        diets?.map(p=><option value={p}>{p}</option>)
                    }
                </select>
                <input type="text" name="summary" id="" />
                <input type="number" name="healthScore" id="" />
                <input type="text" name="instruction" id="" />
                <button type='submit'>submit</button>
            </form>
        </section>
    </div>
  )
}
