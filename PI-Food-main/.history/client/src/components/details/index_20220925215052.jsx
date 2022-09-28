import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { details } from '../../redux/actions'
import './styles.css'

export default function Details() {
    const detail = useSelector(d=>d.details)
    const dispatch = useDispatch()
    const { id }= useParams()

    useEffect(()=>{
        dispatch(details(id))
    },[dispatch])

    return (
    <div>
        <header><Link to={'/home'}>home</Link><div>{detail?.map(e=><h1>{e.title}</h1>)}</div></header>
        <div>
            {
                detail?.map(e=><div key={e.id}>
                    <img src={e.image} />
                    <p>Dieta:</p>
                    <ul> {
                    e.diets?.map(d=><li>{d}</li>)
                    ?? 
                    e.diets.map(d=><li>{d.name}</li>)
                    } </ul>
                    {
                        console.log(e.summary.textContent())
                    }
                    <p>{e.summary}</p>
                    <p>{e.healthScore}</p>
                    <section>
                        paso a paso: {
                            e.analyzedInstructions?.map(pa=><p>{pa.number}<br/>{pa.step}</p>) ?? <p>{e.analyzedInstructions[0]}</p>
                        }
                    </section>
                </div>)
            }
        </div>
    </div>
    )
}