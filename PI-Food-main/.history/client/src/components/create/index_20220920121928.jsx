import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getDiets, postRepice } from '../../redux/actions'
import './styles.css'

export default function Create() {
    const diets = useSelector(e=>e.diets)
    const dispatch = useDispatch()
    const [inputStep ,setInputStep] = useState("")//para setear el numero de inputs
    const [step , setStep] = useState('') //seteo de steps
    const [error,setError] = useState({})
    const [form,setForm] = useState({
        title:'',
        image:'',
        diets:[],
        summary:'',
        healthScore:'',
        analyzedInstructions:[]
    })
    useEffect(()=>{
        dispatch(getDiets())
    },[])

    const validate =(form)=>{
        const error = {}
    if(!form.title){
        error.title = 'complit title please'
    }
    else if(!/^[a-zA-Z\s]*$/.test(form.title)) {
        error.title = "Must contain letters and spaces only";
    }
    else if(/^\s+$/.test(form.title) ) {
        error.title = "Not space in white";
    }
    else if(!form.summary){
        error.summary = 'complit summary please'
    }
    else if(/^\s+$/.test(form.summary) ) {
        error.summary = "Not space in white";
    }
    else if(!form.healthScore){
        error.healthScore = 'complit healthScore please'
    }
    else if(/^\s+$/.test(form.healthScore) ) {
        error.healthScore = "Not space in white";
    }
    else if(form.diets.length==0){
        error.diets='ingrese dietas'
    }
    return error
    }

    const handleChance =(e)=>{
        setForm(()=>{
            const newSetInput={
                ...form,
                [e.target.name] : e.target.value
            }
            console.log(newSetInput)
            const vadidacionInput = validate(newSetInput)
            // console.log(vadidacionInput)
            setError(vadidacionInput)
            return newSetInput
        }) //rellenamos el formulario 
    }

    const handleSelect = (e)=>{
        setForm({
            ...form,
            diets:[...new Set([...form.diets,e.target.value])]
        }) // seteo el arreglo con  la informacion que trae para las diets
    }

    let array= [1,2,3,4,5,6,7,8,9] //cantidad de options
    
    const handleOptionSteps = (e)=>{
        let lengthForInput = e.target.value
        let inputs = [] //le ingreso la cantidad de valores que me trae el value para luego pasar cuanta info necesitamos en el mapeo de cada input 
        let totalSteps = [] //creamos el nuevo arreglo que lleva el total de objetos que necesitamos 
        for(let i=1; i<=lengthForInput;i++){
            inputs.push(i)
            totalSteps.push({number:i,step:''})
        }
        setForm({
            ...form,
            analyzedInstructions:totalSteps
        }) // seteo los objetos que voy a necesitar  
        setInputStep([...inputs]) // seteo la cantidad de inputs para añadir informacion de cada step
    }
    
    

    const handleSteps = (e)=>{
         //ingreso informacion en la ubicacion correcta por el name
        setStep({
                ...form,
                analyzedInstructions:[...form.analyzedInstructions,form.analyzedInstructions[(e.target.name)-1].step=e.target.value]
            })
    }

    const handleSubmitRepice = (e)=>{
        e.preventDefault()
        dispatch(postRepice(form))
    } // envio la informacion para hacer el post

    /*

HAY QUE SOLUCIONAR LA PERDIDA DE INFORMACION AL SETEAR EL NUMERO DE INPUTS PARA AGREGAR MAS PASOS O SACAR ALGUNOS 



*/

    return (
        <div className='divCreate'>
            <div>
                <header>    
                    <Link to={'/home'}>Home</Link>  
                </header>
                <section>
                    <form onSubmit={handleSubmitRepice}>
                        <input type="text" name="title" onChange={handleChance} placeholder='title' />
                        {error.title && <p>{error.title}</p>}
                        <input type="url" name="image"  onChange={handleChance} placeholder='image url' />
                        <select onChange={handleSelect}>
                            <option selected>diets</option>
                            {
                                diets?.map(d=><option defaultValue={d.name} key={d.name+Math.random()}>{d.name}</option>)
                            }
                        </select>
                        {
                            form.diets.length?
                        <ul>
                            <li>Dietas ingresadas: {form.diets?.map(d=>d+' ,')}</li>
                        </ul>
                        : error.diets && <p>{error.diets}</p>    
                    }
                    

                        <input type="text" name="summary" value={form.summary} onChange={handleChance} placeholder='summary' />
                        {error.summary && <p>{error.summary}</p>}
                        <input type="number" name="healthScore" value={form.number} onChange={handleChance} placeholder='health Score' />
                        {error.healthScore && <p>{error.healthScore}</p>}
                    <select name="" id="" onChange={handleOptionSteps}>
                        <option value="">cantidad de steps</option>
                        {
                            array.map(e=><option key={e} defaultValue={e}>{e}</option>)
                        }
                    </select>
                    <footer>{
                        inputStep
                            ?   inputStep.map(e=><input name={e} placeholder={`step ${e}`} onChange={handleSteps} type='text' key={e}></input>)
                            :   'puede ingresar steps'
                        }
                    </footer>
                    <button >submit</button>
                </form>
                </section>
            </div>
        </div>
    ) 
}
