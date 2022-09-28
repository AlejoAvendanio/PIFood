import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { orderByName, orderByScore} from '../../redux/actions'

export function UseFilter(){
    const dispatch = useDispatch()
  const [option, setOption] = useState("")

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
  return{
    handleOrderByName,
    handleOrderByScore
  }
}

