import { useContext, useEffect, useState } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";

// Este componente deberá ser estilado como "dark" o "light" dependiendo del theme del Context
const Favs = () => {
  const { state } = useContext(ContextGlobal);  // Consumiendo el contexto global para el tema
  const [favDentists, setFavDentists] = useState([]);  // Estado local para almacenar los favoritos

  // Efecto para cargar los dentistas guardados en localStorage
  useEffect(() => {
    const storedFavs = JSON.parse(localStorage.getItem('favs')) || [];  // Recuperando los favoritos del localStorage
    setFavDentists(storedFavs);  // Guardando los favoritos en el estado local
  }, []);

  return (
    <main className={state.theme === "dark" ? "dark" : "light"}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favDentists.length > 0 ? (
          favDentists.map((dentist) => (
            <Card key={dentist.id} name={dentist.name} username={dentist.username} id={dentist.id} />
          ))
        ) : (
          <p>No favorites added yet.</p>  // Mostrar mensaje si no hay favoritos guardados
        )}
      </div>
    </main>
  );
};

export default Favs;

