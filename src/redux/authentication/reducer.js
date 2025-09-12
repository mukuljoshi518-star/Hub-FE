
const initialState = {
  isAuthenticated: false,
  user: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload, // store user data after login
      };
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        user: null, // clear user data on logout
      };
    default:
      return state;
  }
};

export default authReducer;
