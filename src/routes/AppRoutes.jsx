import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/Home/HomePage';
import LoginPage from '../pages/Login/LoginPage';
import OneChampPage from '../pages/OneChamp/OneChampPage';
import RandomPickPage from '../pages/RandomPick/RandomPickPage';
import RotationPage from '../pages/Rotation/RotationPage';
import SignupPage from '../pages/Signup/SignupPage';
import ChampionsPage from '../pages/ChampionListPage/ChampionListPage';
import ForumPage from '../pages/ForumPage/ForumPage';
import ForumDetailsPage from '../pages/ForumDetailsPage/ForumDetailsPage'
import ProfilePage from '../pages/Profile/ProfilePage';
import AdminPage from '../pages/AdminPage/AdminPage';
import RivalsPage from '../pages/RivalsPage/RivalsPage';



const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/signup' element={<SignupPage />} />
            <Route path='/randomPick' element={<RandomPickPage />} />
            <Route path='/champions' element={<ChampionsPage />} />
            <Route path='/weekly-rotation' element={<RotationPage />} />
            <Route path='/forum' element={<ForumPage />} />
            <Route path='/champion-details/:name' element={<OneChampPage />} />
            <Route path='/profile/:idUsername' element={<ProfilePage />} />
            <Route path='/forum/:idPost' element={<ForumDetailsPage />} />
            <Route path='/admin' element={<AdminPage />} />
            <Route path='/rivals' element={<RivalsPage />} />
        </Routes>
    )
}

export default AppRoutes