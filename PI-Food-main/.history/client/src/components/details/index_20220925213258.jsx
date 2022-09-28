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
                        console.log(e.diets)
                    }
                    <p>{e.summary}</p>
                    <p>{e.healthScore}</p>
                    <p>
                        paso a paso: {
                            e.analyzedInstructions?.map(p=><p>{p.number}<br/>{p.step}</p>) ?? <p>{e.analyzedInstructions[0]}</p>
                        }
                    </p>
                </div>)
            }
        </div>
    </div>
    )
}