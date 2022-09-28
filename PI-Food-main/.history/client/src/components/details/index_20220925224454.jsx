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
                        <div className='divDetailInfo detailHeigth'>
                            <div className='divDetailBox'><p>Diet</p>
                                <ul> {
                                e.diets?.map(d=><li key={e.id+d}>{d}</li>)
                                ?? 
                                e.diets.map(d=><li key={e.id+d}>{d.name}</li>)
                                } </ul>
                            </div>
                            <div className='divDetailBox detailHeigth'>
                                <p>Summary </p>
                                <p>{summary}</p>
                            </div>
                            <div className='divDetailBox detailHeigth'>
                                <p>Health Score: <b>{e.healthScore}</b></p>
                            </div >
                            <div className='detailHeigth'>
                                <p>Steps</p>
                                <section>
                                    paso a paso: {
                                        e.analyzedInstructions?.map(pa=><p>{pa.number}<br/>{pa.step}</p>) ?? <p>{e.analyzedInstructions[0]}</p>
                                    }
                                </section>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    </div>
    )
}