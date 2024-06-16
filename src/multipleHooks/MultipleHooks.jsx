import React, { useEffect } from 'react'
import UseFetch from './UseFetch'
import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './MultipleHooks.css'





const MultipleHooks = () => {
  let {personajeId} = useParams();
  const navigate = useNavigate();
  personajeId = parseInt(personajeId);
  const [currentId, setCurrentId] = useState(parseInt(personajeId));
  const {data, isLoaidng, hasError} = UseFetch(`https://rickandmortyapi.com/api/character/${personajeId}`)
 
 
  useEffect(()=>{
    navigate(`/personaje/${currentId}`);
  }, [currentId,navigate]);
  
  const anterPersonaje = () =>{
    if (currentId > 1) {
      setCurrentId(currentId -1)
    }
  }
  const sigPersonaje = () =>{
      setCurrentId(currentId +1)
    }
  

  return (
    <div className='multipleh'>
      
      <h1 className='titulo'>INFORMACION</h1>
       <button>
      <Link className='Link' to="/">VOLVER A INICIO</Link>
      </button>
      
      {isLoaidng && <h1>Cargando...</h1>}
      <h1>Nombre : <br /> {data?.name}</h1>
      <h2>Estado : {data?.status}</h2>
      <h2>Especie: {data?.species}</h2>
      <h2>Genero: {data?.gender}</h2> 
      <h2>Origen: {data?.origin?.name}</h2>  
      <img src={data?.image} alt="imagen" />
      <br />
      <button onClick={anterPersonaje}>Anterior</button>
      <button onClick={sigPersonaje}>Siguiente</button>

      

      
      
    </div>
    
    
  )
}

export default MultipleHooks