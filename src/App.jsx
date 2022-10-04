import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavbarComponent from './components/NavbarComponent/NavbarComponent';
import AppRoutes from './routes/AppRoutes';

const App = () => {


  return (
    <div className="App">
      <NavbarComponent />
      <AppRoutes />
    </div>
  );
}

export default App;
