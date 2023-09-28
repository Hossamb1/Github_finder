import { createContext, useReducer } from "react";
import AlertReducer from "./alertReducer";

// creating the context for showing an alert
const AlertContext = createContext();
const initalState = null;

export const AlertProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AlertReducer, initalState);

  // Set Alert
  function setAlert(msg, type) {
    dispatch({
      type: "SET_ALERT",
      payload: { msg, type },
    });

    setTimeout(() => {
      dispatch({
        type: "REMOVE_ALERT",
      });
    }, 3000);
  }
  return (
    <AlertContext.Provider value={{ alert: state, setAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
