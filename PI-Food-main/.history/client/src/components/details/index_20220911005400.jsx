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
        <div><Link to={'/home'}></Link></div>
        <div>
            {
                detail?.map(e=><div key={e.id}>
                    <h3>{e.title}</h3>
                    <img src={e.image} />
                    <h5>Dieta:{e.diets.map(d=><p key={d}>{d}</p>)}</h5>
                    <p>{e.summary}</p>
                    <p>{e.healthScore}</p>
                    <h5>
                        paso a paso: {
                            e.instruction?.map(e=><p>{e}</p>)
                        }
                    </h5>
                </div>)
            }
        </div>
    </div>
  )
}
