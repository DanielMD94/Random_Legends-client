import './LoginPage.css';
import logoNegro from '../../assets/LogoNegro.png'
import { useState, useContext } from 'react';
import { AuthContext } from '../../context/auth.context';
import AuthAxios from "../../services/authAxios";
import { Link, useNavigate } from "react-router-dom";
import { Box, Stack, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

const LoginPage = () => {

    const { user: me, isLoading, isLoggedIn, logOut } = useContext(AuthContext);

    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const [error, setError] = useState(null)
    const [showPass, setShowPass] = useState(false)
    const { storeToken, authentication } = useContext(AuthContext);
    const authAxios = new AuthAxios()

    const login = (eventHTML) => {
        eventHTML.preventDefault();
        authAxios
            .login(user)
            .then((response) => {
                if (response.errorMessage) {
                    setError(response.errorMessage)
                    return
                }
                else {
                    storeToken(response.token)
                    authentication()
                    navigate(`/randomPick`) // EL USER ME LLEGA UNDEFINED (???)
                }
            })
    };

    const updateUser = (eventHTML) => {
        const { value, name } = eventHTML.target;
        setUser({ ...user, [name]: value });
    };

    return (
        <>
            <Box
                className='loginBox'
            >
                <Grid2 className='loginBox' container spacing={0}>
                    <Grid2 xs={12} sm={6} md={3}>
                        <Stack spacing={3}>
                            <div className='loginHeader'>
                                <a href="/"><img src={logoNegro} width="40" alt="Logo Random Legends" /></a>
                                <div className="region">
                                    <p>EUW</p>
                                    <i id="globe"><img
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Globe_icon_2.svg/800px-Globe_icon_2.svg.png"
                                        alt='globe' width="20" /></i>
                                </div>
                            </div>
                            <div className="login-body">
                                <p>LOGIN</p>
                                <Link className="loginLinkToSignup" to='/signup'>Dont have an Account yet? Sign Up</Link>
                                <form onSubmit={login}>
                                    <input type="text" name="username" onChange={updateUser} placeholder="Username" required="required" />

                                    <input type={showPass ? "text" : "password"} name="password" onChange={updateUser} placeholder="Password" required="required" />

                                    <a className="btn btn-secondary" onClick={() => { setShowPass(!showPass) }}>{showPass ? "Hide password" : "Show password"}</a>
                                    <div className="arrowButton">
                                        <Button variant="outlined" type="submit"><ArrowForwardIcon /></Button>
                                    </div>
                                </form>
                                <div className='errorBoxAlign'>
                                    {error && <h5 className='errorBox'>Username or Password Incorrect</h5>}
                                </div>

                            </div>
                        </Stack>
                    </Grid2>
                    <Grid2 id="loginPicture" sm={6} md={9}>
                        {/* <video autoPlay muted loop className="myLoginVideo">
                            <source src="https://res.cloudinary.com/dalk1vcw9/video/upload/v1664656377/aprilfools-2018-webm_v7xxos.webm" type="video/mp4" />
                        </video> */}
                    </Grid2>
                </Grid2>

            </Box>
        </>
    )
}

export default LoginPage;