import { createContext, useState, useEffect, ReactNode, ReactElement } from 'react';
import { validateJwtUseCase } from '../../../core/use-cases/validate-jwt.useCase';

// Define types for the context and state
interface AuthState {
  isLogged: boolean;
  token: string;
  name: string;
  email: string;
}

interface AuthContextProps extends AuthState {
  login: (token: string) => Promise<void>;
  logout: () => void;
}

const localStorageName = 'devcomplete_studios_auth';

const validateToken = async (token: string) => {
  const data = await validateJwtUseCase(token);
  if (data.error) return false;
  return data;
};

const defaultValue: AuthContextProps = {
  isLogged: false,
  token: '',
  name: '',
  email: '',
  login: async () => {}, // Placeholder
  logout: () => {}, // Placeholder
};

export const AuthContext = createContext<AuthContextProps>(defaultValue);

export default function AuthProvider({ children }: { children: ReactNode }): ReactElement {
  const [authState, setAuthState] = useState<AuthState>({
    isLogged: false,
    token: '',
    name: '',
    email: '',
  });

  useEffect(() => {
    const checkAuthStatus = async () => {
      const token = localStorage.getItem(localStorageName) || '';
      if (token) {
        const user = await validateToken(token);
        if (user) {
          setAuthState({
            isLogged: true,
            token,
            name: user.user.name,
            email: user.user.email,
          });
        } else {
          logout();
        }
      }
    };

    checkAuthStatus();
  }, []);

  const login = async (token: string) => {
    const user = await validateToken(token);

    if (user) {
      localStorage.setItem(localStorageName, token);
      setAuthState({
        isLogged: true,
        token,
        name: user.user.name,
        email: user.user.email,
      });
    }
  };

  const logout = () => {
    localStorage.removeItem(localStorageName);
    setAuthState({
      isLogged: false,
      token: '',
      name: '',
      email: '',
    });
  };

  return (
    <AuthContext.Provider value={{ ...authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
