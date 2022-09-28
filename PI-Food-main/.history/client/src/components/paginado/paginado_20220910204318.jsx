import React from "react";
import './styles.css'

export default function Paginado ({foodPerPage, allFood,paginado}){
    const pageNumber = []

    //en este arreglo se pusea cada vez que se divide allDog

    for(let i=1;i<=Math.ceil(allFood/foodPerPage);i++){
        pageNumber.push(i)
    }
    
    
    return (
        <div>
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
        </div>
    )
}