// import  { createContext, useState, useContext } from 'react';
// import axios from 'axios';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   const login = async (username, password) => {
//     const response = await axios.post('/api/login', { username, password });
//     setUser(response.data);
//   };

//   const logout = () => {
//     setUser(null);
//     // Remove cookies or local storage items here
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);

import PropTypes from 'prop-types';
import { useAuth } from '../Context/Auth/Auth';
import { Navigate } from 'react-router-dom';

const Auth = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

Auth.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Auth;
