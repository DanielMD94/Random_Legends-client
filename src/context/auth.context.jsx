import { useEffect } from 'react';
import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthAxios from "../services/authAxios";


export const AuthContext = createContext();

const LOCALSTORAGE_TOKEN = 'tokenAuth';

export const AuthProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  const authAxios = new AuthAxios()
  const navigate = useNavigate();

  const storeToken = (token) => {
    localStorage.setItem(LOCALSTORAGE_TOKEN, token);
  };

  const destroyToken = () => {
    localStorage.removeItem(LOCALSTORAGE_TOKEN);
  };

  const authentication = () => {
    const token = localStorage.getItem(LOCALSTORAGE_TOKEN);

    if (token) {
      authAxios
        .me(token)
        .then((user) => {
          setUser(user);
          setIsLoading(false);
          setIsLoggedIn(true);
          // navigate('/');
        })
        .catch((err) => {
          console.log(err);
          setUser(null);
          setIsLoading(false);
          setIsLoggedIn(false);
          navigate('/');
        });
    } else {
      setUser(null);
      setIsLoading(false);
      setIsLoggedIn(false);
      navigate('/');
    }
  };

  const logOut = () => {
    destroyToken();
    authentication();
  }

  useEffect(() => {
    authentication();
  }, []);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, isLoading, user, storeToken, authentication, logOut }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

// export {
//   AuthContext,
//   AuthProvider
// }
