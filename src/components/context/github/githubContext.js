import { createContext, useReducer } from "react";
import githubReducer from "./githubReducer";

const GithubContext = createContext();
const initalState = {
  user: {},
  data: [],
  repos: [],
  isLoading: false,
};

export const GithubProvider = ({ children }) => {
  const [state, dispatch] = useReducer(githubReducer, initalState);

  return (
    <GithubContext.Provider
      value={{
        ...state,

        dispatch,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
