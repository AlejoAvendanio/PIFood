import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'
export default function LandingPage() {
  return (
    <div className='divLandingPage'>
      <div className='divLandingContain'>
        <div className='divLandingH1'><h1>Bienvenido Cheffcito!</h1></div>
        <div className='divLandingButton' ><Link to='/home'><button>Click para iniciar</button></Link></div>
      </div>
    </div>
  )
}
