import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextGlobal } from './utils/global.context';

const Navbar = () => {
  const { state, toggleTheme } = useContext(ContextGlobal); // Accediendo al estado global y a toggleTheme

  return (
    <nav className={`navbar ${state.theme === "dark" ? "dark" : "light"}`}>
      <div className="footer-logo">
        <img src="./images/DH.png" alt='DH-logo' /> {/* Logo alineado a la izquierda */}
      </div>
      <div className="navbar-links">
        <Link to="/home">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/favs">Favs</Link>
        <button onClick={toggleTheme}>
          {state.theme === "dark" ? "Switch to Light" : "Switch to Dark"} {/* Botón para cambiar el tema */}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

