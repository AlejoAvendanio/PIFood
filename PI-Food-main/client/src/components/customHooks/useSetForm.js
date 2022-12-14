import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { postRepice } from '../../redux/actions'
import { useDietsAndFoodGet } from './useDietsAndFoods'

export default function useSetForm() {
    const [step , setStep] = useState('')
    const [inputStep ,setInputStep] = useState("")
    const dispatch = useDispatch()
    const {diets} = useDietsAndFoodGet()
    const [error,setError] = useState({})
    const [form,setForm] = useState({
        title:'',
        image:'',
        diets:[],
        summary:'',
        healthScore:'',
        analyzedInstructions:[]
    })

    //---------------validaciones-------------------//
    const validate =(form)=>{
        const error = {}
    if(!form.title){
        error.title = 'complite title please'
    }
    else if(!/^[a-zA-Z]{4,20}$/.test(form.title)) {
        error.title = "Must contain letters and spaces only and [4-20] letters";
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
    else if (!(/^[1-9][0-9]?$|^100$/.test(form.healthScore))) {
        error.healthScore = "Please, we need the score of numbers (1-100)";
    }
    else if(/^\s+$/.test(form.healthScore) ) {
        error.healthScore = "Not space in white";
    }
    return error
    }
    //---------------validaciones-------------------//

    
    const handleSubmitRepice = (e)=>{
        e.preventDefault()
        if(form.title && form.summary && form.healthScore ){
            dispatch(postRepice(form))
            alert('recipe create')
        }else{
            alert('complite full')
        }
    } 
    const handleChance =(e)=>{
        e.preventDefault()
        console.log(form)
        setForm(()=>{
            const newSetInput={
                ...form,
                [e.target.name] : e.target.value
            }
            const vadidacionInput = validate(newSetInput)
            // console.log(vadidacionInput)
            setError(vadidacionInput)
            return newSetInput
        }) //rellenamos el formulario 
    }
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
        setInputStep([...inputs]) // seteo la cantidad de inputs para a??adir informacion de cada step
    }
    const handleSelect = (e)=>{
        setForm({
            ...form,
            diets:[...new Set([...form.diets,e.target.value])]
        }) // seteo el arreglo con  la informacion que trae para las diets
    }
    const handleSteps = (e)=>{
        //ingreso informacion en la ubicacion correcta por el name
        setStep({
                ...form,
                analyzedInstructions:[...form.analyzedInstructions,form.analyzedInstructions[(e.target.name)-1].step=e.target.value]
            })
    }
    const handleDeleteDiet=(e)=>{
    setForm({
        ...form,
        diets: form.diets.filter(el=>el!==e)
    })

    }

    return {
    handleSelect,
    handleSteps,
    handleOptionSteps,
    handleChance,
    handleSubmitRepice,
    handleDeleteDiet,
    form,
    inputStep,
    diets,
    error
    }
}
