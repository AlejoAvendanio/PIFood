import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { details } from '../../redux/actions'
import { Loader } from '../loader/loader'
import './styles.css'

export default function Details() {
    const detail = useSelector(d=>d.details)
    const dispatch = useDispatch()
    const { id }= useParams()
    const [loading , setLoading] = useState(false)
    useEffect(()=>{
        dispatch(details(id))
    },[dispatch])
    let summary = detail.map(e=>e.summary?.replace(/<[^>]*>/g,''))

    return (
    <div className='divDetail'>
        <div>
        <header className='headerDetail'><Link to={'/home'}>home</Link><div>{detail?.map(e=><h1>{e.title}</h1>)}</div></header>
        <div className='divDetails'>
            {
                loading && <Loader/>
            }
            {
                detail?.map(e=><div key={e.id}>
                    <div className='divDetailFlex'>
                            <img src={e.image} />
                        <div className='divDetailInfo '>
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
                                    {
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
        <div className='divImgDetails'>
            
        </div>
    </div>
    )
}