import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


export default function Details() {
    const details = useSelector(d=>d.details)
  return (
    <div>
        <div><Link to={'/home'}></Link></div>
        <div>
            {
                console.log(details)
            }
        </div>
    </div>
  )
}
