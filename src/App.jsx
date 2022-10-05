import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent/NavbarComponent';
import AppRoutes from './routes/AppRoutes';

const App = () => {

  const [showNavbar, setShowNavbar] = useState(true)
  let location = useLocation();

  useEffect(() => {
    location.pathname === '/' ? setShowNavbar(false) : setShowNavbar(true)
  }, [location.pathname])

  return (
    <div className="App">
      {
        showNavbar && <NavbarComponent />
      }
      <AppRoutes />
    </div>
  );
}

export default App;
