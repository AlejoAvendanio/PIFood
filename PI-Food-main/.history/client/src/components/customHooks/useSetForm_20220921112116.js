import { useState } from 'react'

export default function useSetForm() {
    const [form,setForm] = useState({
        title:'',
        image:'',
        diets:[],
        summary:'',
        healthScore:'',
        analyzedInstructions:[]
    })
    const handleSelect = (e)=>{
        setForm({
            ...form,
            diets:[...new Set([...form.diets,e.target.value])]
        }) // seteo el arreglo con  la informacion que trae para las diets
    }
    console.log(form.diets)
  return {
    handleSelect
  }
}
