import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { filterByDiets, filterRepiceCreate, orderByName, orderByScore} from '../../redux/actions'
import usePaginate from './usePaginate'

export function UseFilter(){
    const dispatch = useDispatch()
    const [option, setOption] = useState("")
    const { setCurrentPage } = usePaginate()
    
    const handleOrderByName = (e)=>{
        e.preventDefault()
        dispatch(orderByName(e.target.value))
        setOption(e.target.value)
    }

    const handleOrderByScore = (e)=>{
        e.preventDefault()
        dispatch(orderByScore(e.target.value))
        setOption(e.target.value)
    }
    const handleOption =(e)=>{
        e.preventDefault()
        dispatch(filterByDiets(e.target.value))
        setCurrentPage(1)
        setOption(e.target.value)
    }
    const handleRecipeCreate=(e)=>{
        dispatch(filterRepiceCreate(e.target.value))
        setCurrentPage(1)
        setOption(e.target.value)
    }
    return{
        handleOrderByName,
        handleOrderByScore,
        handleOption,
        handleRecipeCreate,
    }
}

