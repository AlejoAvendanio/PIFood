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
                detail?.map(e=><div>
                    <h3>{e.title}</h3>
                    <img src={e.img} alt={e.id}/>
                </div>)
            }
        </div>
    </div>
  )
}
