import './SignupPage.css'
import logoNegro from '../../assets/LogoNegro.png'
import { useState } from "react";
import AuthAxios from "../../services/authAxios";
import { useNavigate } from "react-router-dom";
import { Box, Stack, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';


const SignupPage = () => {

    const authAxios = new AuthAxios()
    const [newUser, setNewUser] = useState({});
    // const [error, setError] = useState(null)
    const navigate = useNavigate();


    const createNewUser = (eventHTML) => {
        eventHTML.preventDefault();
        authAxios.registro(newUser).then((response) => {
            navigate('/login')
        });
    };

    const updateNewUser = (eventHTML) => {
        const { name, value } = eventHTML.target;
        setNewUser({ ...newUser, [name]: value });
    };


    return (
        <>
            <Box
                className='signupBox'
            >
                <Grid2 className='signupBox' container spacing={0}>
                    <Grid2 xs={12} sm={6} md={3}>
                        <Stack spacing={3}>
                            <div className='signupHeader'>
                                <a href="/"><img src={logoNegro} width="40" alt="Logo Random Legends" /></a>
                                <div className="region">
                                    <p>EUW</p>
                                    <i id="globe"><img
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Globe_icon_2.svg/800px-Globe_icon_2.svg.png"
                                        alt='globe' width="20" /></i>
                                </div>
                            </div>
                            <div className="signup-body">
                                <p>SIGN UP</p>
                                <form onSubmit={createNewUser}>
                                    <input type="text" name="username" onChange={updateNewUser} placeholder="Username" required="required" />

                                    <input type="password" name="password" onChange={updateNewUser} placeholder="Password" required="required" />

                                    <input type="text" name="summonerName" onChange={updateNewUser} placeholder="Summoner Name (optional)" />
                                    <div className="signupArrowButton">
                                        <Button variant="outlined" type="submit"><ArrowForwardIcon /></Button>
                                    </div>
                                </form>

                            </div>
                        </Stack>
                    </Grid2>
                    <Grid2 id="signupPicture" sm={6} md={9}>
                        {/* <video autoPlay muted loop className="mySignupVideo">
                            <source src="https://res.cloudinary.com/dalk1vcw9/video/upload/v1664709203/project-hunters-animated-login_abofom.webm" type="video/mp4" />
                        </video> */}
                    </Grid2>
                </Grid2>

            </Box>
        </>

    )
}

export default SignupPage