import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavbarComponent from './components/NavbarComponent';
import ChampionsPage from './pages/ChampionsPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import OneChampPage from './pages/OneChampPage';
import RandomPickPage from './pages/RandomPickPage';
import RotationPage from './pages/RotationPage';
import SignupPage from './pages/SignupPage';


const App = () => {
  return (
    <div className="App">
      <NavbarComponent />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/randomPick' element={<RandomPickPage />} />
        <Route path='/champions' element={<ChampionsPage />} />
        <Route path='/weekly-rotation' element={<RotationPage />} />
        <Route path='/champion-details/:name' element={<OneChampPage />} />

      </Routes>
    </div>
  );
}

export default App;
