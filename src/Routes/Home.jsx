import { useContext } from 'react';
import Card from '../Components/Card';
import { ContextGlobal } from '../Components/utils/global.context';

const Home = () => {
  // Accedemos al estado global para obtener el tema y los datos (dentistas)
  const { state } = useContext(ContextGlobal);
  const { theme, data: dentists = [] } = state; 

  return (
    <main className={theme === "dark" ? "dark" : "light"}>
      <h1>Home</h1>
      <div className="card-grid">
        {/* Mapeamos los datos para renderizar cada tarjeta */}
        {dentists.map((dentist) => (
          <Card
            key={dentist.id}
            name={dentist.name}
            username={dentist.username}
            id={dentist.id}
          />
        ))}
      </div>
    </main>
  );
}

export default Home;


