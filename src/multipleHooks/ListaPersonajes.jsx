import React from 'react'
import UseFetch from './UseFetch'
import { Link } from 'react-router-dom'
import './ListaPersonajes.css'

const ListaPersonajes = () => {
    const {data, isLoaidng, hasError} = UseFetch('https://rickandmortyapi.com/api/character')
    

  
  return (
    <div >
         <h1 className='Titulo'>Personajes</h1>
         
        {isLoaidng &&<h1>Cargando...</h1>}
        {hasError && <h1>Hubo un error</h1>}
        
        {data && (
            
            <ul className='Lista'>
                {data.results.map((personaje)=>(
                    <li key={personaje.id}>
                        <Link to={`/personaje/${personaje.id}`}>
                        {personaje.name} <br />
                        <img src={personaje.image} alt={personaje.name} />  <br /> <br />
                                               
                        </Link>
                        
                    </li>

                ))}
            </ul>
        )}
       


    </div>
  )
}

export default ListaPersonajes