import axios from 'axios'
import { useEffect, useState } from 'react'

const baseUrl = 'http://127.0.0.1:8000/api/clients/2'
function App() {
  const [cliente, setCliente]= useState(null)

  useEffect(()=>{
    axios.get(baseUrl).then((response)=>{
      setCliente(response.data)
    })
  },[])

  return (
    cliente ?
   <div>
    <h1>{cliente.nombre} {cliente.apellido}</h1>
    <p>TIPO: {cliente.tipo_cliente}</p>
   </div> : <>Nada que mostrar (tenes runear el back)</>
  );
}

export default App;
