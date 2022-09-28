import React from "react";
import { useDietsAndFoodGet } from "../customHooks/useDietsAndFoods";
import usePaginate from "../customHooks/usePaginate";
import './styles.css'

export default function Paginado ({paginado}){
    const pageNumber = []
    const { foodPerPage } = usePaginate()
    const {food} = useDietsAndFoodGet()
    const allFood = food.length
    //en este arreglo se pusea cada vez que se divide allDog

    for(let i=1;i<=Math.ceil(allFood/foodPerPage);i++){
        pageNumber.push(i)
    }
    
    
    return (
        <header className="headerPaginado"><div className="divPaginado">
            <ul>
                {
                    pageNumber &&
                    //si esta el arreglo lo mapeamos 
                    pageNumber.map(n=>{
                        return(
                        <li key={n}>
                            <a onClick={()=>paginado(n)}>{n}</a>
                        </li>
                        )
                    })
                }
            </ul>
        </div></header>
    )
}