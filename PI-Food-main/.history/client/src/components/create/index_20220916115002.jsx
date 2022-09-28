import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getDiets } from '../../redux/actions'

export default function Create() {
    const diets = useSelector(e=>e.diets)
    const dispatch = useDispatch()
    const [inputStep ,setInputStep] = useState("")//para setear el numero de inputs
    const [form,setForm] = useState({
        title:'',
        image:'',
        diets:[],
        summary:'',
        healthScore:'',
        analyzedInstructions:[{number:'',step:''}]
    })
    useEffect(()=>{
        dispatch(getDiets())
    },[])

    const handleChance =(e)=>{
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }
    const handleSelect = (e)=>{
        setForm({
            ...form,
            diets:[...new Set([...form.diets,e.target.value])]
        })
    }
    let array= [1,2,3,4,5,6,7,8,9]

    

    const handleOptionSteps = (e)=>{
        let lengthForInput = e.target.value
        let inputs = []
        let totalSteps = []
        for(let i=1; i<=lengthForInput;i++){
            inputs.push(i)
            totalSteps.push({number:i,step:''})
        }
        setForm({
            ...form,
            analyzedInstructions:totalSteps
        })
        setInputStep([...inputs])
    }
    
    const [step , setStep] = useState('')

    const handleSteps = (e)=>{
        setStep({
            ...form,
            analyzedInstructions:[...form.analyzedInstructions,form.analyzedInstructions[0].step=[e.target.name]=e.target.value]
        })
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
                    <input type="text" name="analyzedInstructions" onChange={handleChance} placeholder='analyzedInstructions' />
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
                    inputStep
                        ?   inputStep.map(e=><input name='e' onChange={handleSteps} type='text' key={e}></input>)
                        :   'puede ingresar steps'
                    }
            </section>
        </div>
    ) 
}
