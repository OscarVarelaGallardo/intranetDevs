import { useEffect, useState } from 'react';
import Comunicados from './Comunicados/Comunicados';
import Loading from './Helpers/Loading';

function App() {
  const [comunicados, setComunicados] = useState([])

  const peticion = async () => {
    const response = await fetch('http://192.168.9.41:5000/api/GetComunicadosActivos', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    const data = await response.json();
  
    setComunicados(data);
  }

  useEffect(() => {
    peticion()
  }, [])

  {
    return comunicados.length > 0 ? <Comunicados comunicados={comunicados}/> : <Loading/>
  }
}

export default App
