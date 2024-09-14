// Estado inicial
export const initialState = {
    theme: "light", // El tema por defecto es "light"
    data: [] // Datos de los dentistas
  };
  
  // Reducer para manejar el estado global
  export const globalReducer = (state, action) => {
    switch (action.type) {
      case "SET_THEME":
        return { ...state, theme: action.payload };
      case "SET_DATA":
        return { ...state, data: action.payload };
      default:
        return state;
    }
  };
  