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
    let summary = detail.map(e=>e.summary?.replace(/<[^>]*>/g,''))

    return (
    <div>
        <header className='headerDetail'><Link to={'/home'}>home</Link><div>{detail?.map(e=><h1>{e.title}</h1>)}</div></header>
        <div className='divDetails'>
            {
                detail?.map(e=><div key={e.id}>
                    <div className='divDetailFlex'>
                            <img src={e.image} />
                        <div className='divDetailInfo'>
                            <p>Dieta:</p>
                            <ul> {
                            e.diets?.map(d=><li key={e.id+d}>{d}</li>)
                            ?? 
                            e.diets.map(d=><li key={e.id+d}>{d.name}</li>)
                            } </ul>
                            <p>Summary: </p>
                            <p>{summary}</p>
                            <p>Health Score: <b>{e.healthScore}</b></p>
                            <section>
                                paso a paso: {
                                    e.analyzedInstructions?.map(pa=><p>{pa.number}<br/>{pa.step}</p>) ?? <p>{e.analyzedInstructions[0]}</p>
                                }
                            </section>
                        </div>
                    </div>
                </div>)
            }
        </div>
    </div>
    )
}