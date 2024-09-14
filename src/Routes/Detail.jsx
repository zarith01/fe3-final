import { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const { id } = useParams();  // Obteniendo el parámetro dinámico de la URL
  const { state } = useContext(ContextGlobal);  // Consumiendo el contexto global
  const [dentist, setDentist] = useState(null);  // Estado para guardar los datos del dentista
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)  // API 
      .then(response => response.json())
      .then(data => setDentist(data))
      .catch(error => console.error('Error fetching dentist details:', error));
  }, [id]);

  return (
      <main className={state.theme === 'dark' ? 'dark' : 'light'}>
      <h1>Detail Dentist {id}</h1>
      {dentist ? (
        <div className="detail-card">
          <p><strong>Name:</strong> {dentist.name}</p>
          <p><strong>Email:</strong> {dentist.email}</p>
          <p><strong>Phone:</strong> {dentist.phone}</p>
          <p><strong>Website:</strong> {dentist.website}</p>
        </div>
      ) : (
        <p>Loading...</p>  // Mostrando un mensaje mientras se carga la data
      )}
    </main>
  )
}

export default Detail