import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { details } from '../../redux/actions'


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
                    <h5>Dieta: {e.diets.map(d=>d.name + ' ,') || e.diets?.map(d=>d) +' , '} </h5>
                    {
                        console.log(e.diets[0].name)
                    }
                    <p>{e.summary}</p>
                    <p>{e.healthScore}</p>
                    <p>
                        paso a paso: {
                            e.analyzedInstructions?.map(p=><p>{p.number}<br/>{p.step}</p>) || <p>Sin Steps</p>
                        }
                    </p>
                </div>)
            }
        </div>
    </div>
    )
}