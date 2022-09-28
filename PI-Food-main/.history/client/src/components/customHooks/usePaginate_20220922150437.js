import { useState } from 'react'
import { useSelector } from 'react-redux'

export default function usePaginate() {
    const { food } = useSelector(state=>state.foods)
    const [ currentPage , setCurrentPage ] = useState(INITIAL_PAGE) //estado inicial
    const foodPerPage  = 9 //se setea la cantidad de razas por pagina
    const lastFood  = currentPage * foodPerPage //en un principio es 9
    const firstFood = lastFood - foodPerPage // 0
    const currentFood = food.slice(firstFood,lastFood)// p:1 ------0-------9 = p2:------9------17
    
    const paginado = (pageNumber)=>{
        setCurrentPage(pageNumber)
    }

  return {
    
  }
}
