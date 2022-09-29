import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from 'react';
import './App.css';
import NavbarComponent from './components/NavbarComponent/NavbarComponent';
import { AuthContext } from './context/auth.context';
import AppRoutes from './routes/AppRoutes';

const App = () => {

  const { user } = useContext(AuthContext)
  console.log(user)

  return (
    <div className="App">
      <NavbarComponent />
      <AppRoutes />
    </div>
  );
}

export default App;
