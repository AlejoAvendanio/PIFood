import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'
import Card from '../card'
import img from '../img/imglinda.webp'
import imgHome from '../img/iconoHome.png'


import useSetForm from '../customHooks/useSetForm'


let array= [1,2,3,4,5,6,7,8,9] //cantidad de options

export default function Create() {
    const {
        handleSelect,
        handleSteps,
        handleOptionSteps,
        handleChance,
        handleSubmitRepice,
        handleDeleteDiet,
        form,
        inputStep,
        diets,
        error
    } = useSetForm()

    return (
        <div className='create'>
            <header className='headerCreate'>    
                <Link to={'/home'}><img src={imgHome} alt='icon'/><p>Home</p></Link>  
            </header>
        <div className='divCreate'>
            <div className='containBody'>
                <div>
                    <section>
                        <form onSubmit={handleSubmitRepice}>
                            <div className='divFormCreate'>
                                <input type="text" name="title" onChange={(e)=>handleChance(e)} placeholder='title' />
                                
                                <input type="url" name="image"  onChange={handleChance} placeholder='image url' />
                                <select onChange={(e)=>handleSelect(e)}>
                                    <option selected>diets</option>
                                    {
                                        diets?.map(d=><option defaultValue={d.name} key={d.name+Math.random()}>{d.name}</option>)
                                    }
                                </select>
                                {
                                    form.diets.length?
                                <ul><p>Dietas ingresadas:</p>
                                        {form.diets?.map(d=><li>{d} <button className='buttonDelete' type='button' onClick={()=>{handleDeleteDiet(d)}}><b>X</b></button></li>)}
                                </ul>
                                : error.diets && <p>{error.diets}</p>    
                            }
                                <input type="text" name="summary" value={form.summary} onChange={(e)=>handleChance(e)} placeholder='summary' />
                                    
                                <input type="number" name="healthScore" value={form.number} onChange={(e)=>handleChance(e)} placeholder='health Score' />
                                    
                                <select onChange={(e)=>handleOptionSteps(e)}>
                                    <option value="">cantidad de steps</option>
                                    {
                                        array.map(e=><option key={e} defaultValue={e}>{e}</option>)
                                    }
                                </select>
                                <footer>{
                                    inputStep
                                        ?   inputStep.map(e=><textarea name={e} placeholder={`step ${e}`} onChange={handleSteps} type='text' key={e.Math.random()}></textarea>)
                                        :   'puede ingresar steps'
                                    }
                                </footer>
                                <button className='buttonSubmit' >submit</button>
                            </div>
                            <div className='divErrors'>
                            {error.title && <p>{error.title}</p>}
                            {error.summary && <p>{error.summary}</p>}
                            {error.healthScore && <p>{error.healthScore}</p>}
                            </div>
                        </form>
                    </section>
                </div>
            </div>
            <div className='divCreateFondo'></div>
            <div className='divCardCreate'>
                <h4>Modelo de receta posteada:</h4>
                <Card 
                    title={form.title || 'Un especial...'}
                    diets={form.diets?.[0]?.name ? form.diets.map(e=>e.name) : form.diets }
                    healthScore={form.healthScore || 'ingrese score' }
                    img={form.image || img}
                />
            </div>
        </div>
        </div>
    ) 
}
