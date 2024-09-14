import { useState } from "react";

const Form = () => {
  // Estados para manejar los valores del formulario y los mensajes de error/éxito
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Validación de nombre (debe tener más de 5 caracteres)
  const isValidName = (name) => name.length > 5;

  // Validación de email (formato correcto de email)
  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

  // Manejo del submit del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    if (!isValidName(name)) {
      setErrorMessage("Por favor verifique su información nuevamente. El nombre debe tener más de 5 caracteres.");
      return;
    }

    if (!isValidEmail(email)) {
      setErrorMessage("Por favor verifique su información nuevamente. El email debe tener un formato válido.");
      return;
    }

    // Si todas las validaciones pasan, mostramos mensaje de éxito
    setSuccessMessage(`Gracias ${name}, te contactaremos cuando antes vía mail.`);
    console.log({ name, email }); 
  };

  return (
    <div>
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit}>
        {/* Campo para el nombre */}
        <div>
          <label htmlFor="name">Nombre completo:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ingresa tu nombre completo"
          />
        </div>

        {/* Campo para el email */}
        <div>
          <label htmlFor="email">Correo electrónico:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Ingresa tu correo electrónico"
          />
        </div>

        {/* Botón de submit */}
        <button type="submit">Enviar</button>
      </form>

      {/* Mostrar mensaje de error si hay uno */}
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

      {/* Mostrar mensaje de éxito si se envía correctamente */}
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
    </div>
  );
};

export default Form;
