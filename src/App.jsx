import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavbarComponent from './components/NavbarComponent/NavbarComponent';
import ChampionListPage from './pages/ChampionList/ChampionListPage';
import HomePage from './pages/Home/HomePage';
import LoginPage from './pages/Login/LoginPage';
import OneChampPage from './pages/OneChamp/OneChampPage';
import ProfilePage from './pages/Profile/ProfilePage';
import RandomPickPage from './pages/RandomPick/RandomPickPage';
import RotationPage from './pages/Rotation/RotationPage';
import SignupPage from './pages/Signup/SignupPage';


const App = () => {
  return (
    <div className="App">
      <NavbarComponent />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/profile/:id' element={<ProfilePage />} />
        <Route path='/randomPick' element={<RandomPickPage />} />
        <Route path='/champions' element={<ChampionListPage />} />
        <Route path='/weekly-rotation' element={<RotationPage />} />
        <Route path='/champion-details/:name' element={<OneChampPage />} />

      </Routes>
    </div>
  );
}

export default App;
