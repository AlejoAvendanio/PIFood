import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getDiets } from '../../redux/actions'

export default function Create() {
    const diets = useSelector(e=>e.diets)
    const dispatch = useDispatch()
    const [form,setForm] = useState({
        title:'',
        image:'',
        diets:[],
        summary:'',
        healthScore:'',
        instruction:[{steps:''}]
    })
    useEffect(()=>{
        dispatch(getDiets())
    },[dispatch])

    const handleChance =(e)=>{
        setForm({
            ...form,
            [e.target.name] : [e.target.value]
        })
    }
    const handleSelect = (e)=>{
        setForm({
            ...form,
            diets:[new Set([...form.diets,e.target.value])]
        })
    }
    return (
        <div>
            {console.log(diets.name)}
            <header>    
                <Link to={'/home'}>Home</Link>  
            </header>
            <section>
                <form>
                    <input type="text" name="title" onChange={handleChance} />
                    <input type="url" name="image" onChange={handleChance} />
                    <select onChange={handleSelect}>
                        <option selected>diets</option>
                        {
                            diets?.map(d=><option defaultValue={d.name} key={d.name+Math.random()}>{d.name}</option>)
                            
                        }
                    </select>
                    <input type="text" name="summary" onChange={handleChance} />
                    <input type="number" name="healthScore" onChange={handleChance}/>
                    <input type="text" name="instruction" onChange={handleChance}/>
                    <button type='submit'>submit</button>
                </form>
                {
                    <ul>
                        {/* {console.log(form.diets)} */}
                        <li>{form.diets?.map(d=>d+' ,')}</li>
                    </ul>
                }
            </section>
        </div>
    ) 
}
