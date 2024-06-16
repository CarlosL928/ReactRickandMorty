import { useEffect, useState } from 'react'

const UseFetch = (url) => {
  
  const [state, setState] = useState(
    {data: null,
      isLoaidng: true, 
      hasError: null
    }
    )

     useEffect(()=>{
      getFetch()
     },[url]);

     const getFetch = async()=>{
      const response = await fetch(url);

      if(!response.ok){
        setState({
          data: null,
          isLoaidng: false,
          hasError: true,
          ErrorMessage: null
        })
        return;
      }

      const data = await response.json();
      setState({
        data: data,
        isLoaidng: false,
        hasError: false,
        ErrorMessage: null
      })

     }

     return{
      data: state.data,
      isLoaidng: state.isLoaidng,
      hasError: state.hasError,
      ErrorMessage: state.ErrorMessage


     }




    }
    

export default UseFetch;