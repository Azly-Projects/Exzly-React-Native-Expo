import React, { createContext, useContext, useReducer } from 'react';

interface IAuthContext {
  isAuthenticated: boolean;
  isAuthenticating: boolean;
  setIsAuthenticated: (state: boolean) => void;
  setIsAuthenticating: (state: boolean) => void;
}

interface IAuthAction {
  type: 'authenticated' | 'authenticating';
  payload: boolean;
}

export const AuthContext = createContext<Partial<IAuthContext>>({
  isAuthenticated: false,
  isAuthenticating: false,
});

const reducer = (
  state: { isAuthenticated: boolean; isAuthenticating: boolean },
  action: IAuthAction,
) => {
  switch (action.type) {
    case 'authenticated':
      return {
        ...state,
        isAuthenticated: action.payload,
      };

    case 'authenticating':
      return {
        ...state,
        isAuthenticating: action.payload,
      };

    default:
      return state;
  }
};

const initialState = {
  isAuthenticated: false,
  isAuthenticating: false,
};

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AuthContext.Provider
      value={{
        ...state,
        setIsAuthenticated(state) {
          dispatch({ type: 'authenticated', payload: state });
        },
        setIsAuthenticating(state) {
          dispatch({ type: 'authenticating', payload: state });
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider');
  }

  return context;
};

export { AuthProvider, useAuth };
