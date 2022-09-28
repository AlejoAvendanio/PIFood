import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getNameQuery } from '../../redux/actions'

export default function SearchBar() {
    const dispatch = useDispatch()
    const [input , setInput] = useState("")
    const handleInput = (e)=>{
        e.preventDefault()
        setInput(e.target.value)
    }

    const handleForm = (e)=>{
        e.preventDefault()
        dispatch(getNameQuery(input))
    }
  return (
    <div>
        <form onChange={handleForm}>
            <input type="search" placeholder='Search food...' onChange={handleInput} />
            <button>Search</button>
        </form>
    </div>
  )
}