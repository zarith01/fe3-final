import { createContext, useReducer, useMemo, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { globalReducer, initialState } from "./globalReducer";  // Importa el reducer y el estado inicial

// Definición del Contexto Global
export const ContextGlobal = createContext(undefined);

// Provider del Contexto
export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  // Lógica para alternar entre temas (claro/oscuro), memorizada con useCallback
  const toggleTheme = useCallback(() => {
    dispatch({
      type: "SET_THEME",
      payload: state.theme === "light" ? "dark" : "light",
    });
  }, [state.theme]);

  // Obtener datos de una API simulada
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      dispatch({ type: "SET_DATA", payload: data });
    };

    fetchData();
  }, []);

  // Memoizamos el valor del contexto para optimizar el renderizado
  const providerValue = useMemo(() => {
    return {
      state,
      dispatch,
      toggleTheme, // Función para cambiar el tema
    };
  }, [state, toggleTheme]);

  return (
    <ContextGlobal.Provider value={providerValue}>
      {children}
    </ContextGlobal.Provider>
  );
};

// Validación de PropTypes
ContextProvider.propTypes = {
  children: PropTypes.node.isRequired
};
