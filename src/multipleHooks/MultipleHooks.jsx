import React, { useEffect } from 'react'
import UseFetch from './UseFetch'
import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Link } from 'react-router-dom'





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
      
      <Link to="/">INICIO</Link>
      <br />
      <button onClick={sigPersonaje}>Siguiente</button>
      <button onClick={anterPersonaje}>Anterior</button>
      <h1>Informacion de los personajes</h1>
      
      {isLoaidng && <h1>Cargando...</h1>}
      <h1>Nombre del personaje: {data?.name}</h1>
      <h2>Id: {data?.id}</h2>
      <h2>Estado : {data?.status}</h2>
      <h2>Especie: {data?.species}</h2>
      <h2>Genero: {data?.gender}</h2> 
      <h2>Origen: {data?.origin?.name}</h2>     
      <img src={data?.image} alt="imagen" />
      

      
      
    </div>
    
    
  )
}

export default MultipleHooks