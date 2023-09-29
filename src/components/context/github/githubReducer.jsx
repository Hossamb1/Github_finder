const githubReducer = (state, action) => {
  switch (action.type) {
    case "CLEAR_SEARCH":
      return {
        ...state,
        data: [],
      };

    case "GET_USER_AND_REPOS":
      return {
        ...state,
        user: action.payload.user,
        repos: action.payload.repos,
        isLoading: false,
      };
    case "GET_USERS":
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    default:
      return state;
  }
};

export default githubReducer;
