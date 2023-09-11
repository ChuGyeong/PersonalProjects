import { createContext, memo, useContext, useMemo, useState } from 'react';
import { json, useNavigate } from 'react-router-dom';

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = memo(({ children }) => {
   const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('user')) || null);
   const navigate = useNavigate();

   const login = (email, password) => {
      const logUser = {
         id: 'a123',
         email,
      };
      localStorage.setItem('user', JSON.stringify(logUser));
      if (password === '1234') {
         setUser(logUser);
         navigate('/');
      }
   };
   const logout = () => {
      localStorage.removeItem('user');
      setUser(null);
      navigate('/login');
   };

   const value = useMemo(
      () => ({
         user,
         login,
         logout,
         authed: !!user,
      }),
      [user, login, logout],
   );

   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
});
