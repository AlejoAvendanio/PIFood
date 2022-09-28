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
        <div><Link to={'/home'}>home</Link></div>
        <div>
            {
                detail?.map(e=><div key={e.id}>
                    <h3>{e.title}</h3>
                    <img src={e.image} />
                    <p>Dieta:</p>
                    <ul> {
                    e.diets?.map(d=><li>{d}</li>)
                    ?? 
                    e.diets.map(d=><li>{d.name}</li>)
                    } </ul>
                    {
                        console.log(e.analyzedInstructions[0])
                    }
                    <p>{e.summary}</p>
                    <p>{e.healthScore}</p>
                    {
                    }
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