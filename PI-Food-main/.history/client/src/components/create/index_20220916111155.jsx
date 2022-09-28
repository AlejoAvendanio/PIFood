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
    },[])

    const handleChance =(e)=>{
        setForm({
            ...form,
            [e.target.name] : [e.target.value]
        })
    }
    const handleSelect = (e)=>{
        setForm({
            ...form,
            diets:[...new Set([...form.diets,e.target.value])]
        })
    }
    let array= [1,2,3,4,5,6,7,8,9]

    const [inputStep ,setInputStep] = useState("")

    const handleOptionSteps = (e)=>{
        let lengthForInput = e.target.value
        let inputs = []
        for(let i=1; i<=lengthForInput;i++){
            inputs.push(i)
        }
        setInputStep([...inputs])
    }

    return (
        <div>
            {console.log(diets.map(e=>e.name))}
            {console.log(form)}
            <header>    
                <Link to={'/home'}>Home</Link>  
            </header>
            <section>
                <form>
                    <input type="text" name="title" onChange={handleChance} placeholder='title' />
                    <input type="url" name="image" onChange={handleChance} placeholder='image url' />
                    <select onChange={handleSelect}>
                        <option selected>diets</option>
                        {
                            diets?.map(d=><option defaultValue={d.name} key={d.name+Math.random()}>{d.name}</option>)
                        }
                    </select>
                    <input type="text" name="summary" onChange={handleChance} placeholder='summary' />
                    <input type="number" name="healthScore" onChange={handleChance} placeholder='health Score' />
                    <input type="text" name="instruction" onChange={handleChance} placeholder='instruction' />
                    <button type='submit'>submit</button>
                </form>
                {
                    <ul>
                        {/* {console.log(form.diets)} */}
                        <li>{form.diets?.map(d=>d+' ,')}</li>
                        {
                            console.log(form.diets)
                        }
                    </ul>
                }
                <select name="" id="" onChange={handleOptionSteps}>
                    <option value="">cantidad de steps</option>
                    {
                        array.map(e=><option key={e} defaultValue={e}>{e}</option>)
                    }
                </select>
                {
                    // inputStep.length<0 && inputStep.map(e=><input type='text' key={e}></input>)
                }
            </section>
        </div>
    ) 
}
