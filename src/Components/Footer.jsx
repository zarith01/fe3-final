import { useContext } from 'react'
import { ContextGlobal } from './utils/global.context'

const Footer = () => {
  const { state } = useContext(ContextGlobal)

  return (
    <footer className={state.theme === 'dark' ? 'dark' : 'light'}>
      <div className="footer-top">
        <p>Texto en la parte superior</p> {/* Texto centrado en la barra roja */}
      </div>
      <div className="footer-content">
        <div className="footer-logo">
          <img src="./images/DH.png" alt='DH-logo' /> {/* Logo alineado a la izquierda */}
        </div>
        <div className="footer-social">
          {/* Iconos de redes sociales alineados a la derecha */}
          <img src="/images/ico-facebook.png" alt='ico-facebook' />
          <img src="/images/ico-instagram.png" alt='ico-instagram' />
          <img src="/images/ico-tiktok.png" alt='ico-tiktok' />
          <img src="/images/ico-whatsapp.png" alt='ico-whatsapp' />
        </div>
      </div>
    </footer>
  );
}

export default Footer;



