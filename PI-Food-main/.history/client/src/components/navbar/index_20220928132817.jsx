import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getNameQuery } from '../../redux/actions'

export default function SearchBar({setCurrentPage}) {
    const dispatch = useDispatch()
    const [input , setInput] = useState("")
    const handleInput = (e)=>{
        e.preventDefault()
        setInput(e.target.value)
    }

    const handleForm = (e)=>{
        e.preventDefault()
        dispatch(getNameQuery(input))
        setCurrentPage(1)
    }
    useEffect(()=>{
        getNameQuery(input)
    })

    return (
    <div>
        <form onSubmit={handleForm}>
            <input type="search" value={input} placeholder='Search food...' onChange={handleInput} />
            <button>Search</button>
        </form>
    </div>
    )
}
