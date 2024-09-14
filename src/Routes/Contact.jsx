import { useContext } from 'react';
import Form from '../Components/Form';
import { ContextGlobal } from '../Components/utils/global.context';

const Contact = () => {
  const { state } = useContext(ContextGlobal);

  return (
    <div className={state.theme === 'dark' ? 'dark' : 'light'}>
      <div className="contact-container">
        <h2>Want to know more?</h2>
        <p>Send us your questions and we will contact you</p>
        <div className="form-container">
          <Form /> {/* Renderiza el componente Form con sus validaciones */}
        </div>
      </div>
    </div>
  );
};

export default Contact;

