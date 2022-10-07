import './RandomPickComponent.css'
import { Card, Row } from "react-bootstrap";
import React from "react";
import Tilt from 'react-parallax-tilt';
import { Link } from "react-router-dom";


const RandomPickComponent = ({ myChampion }) => {
    const { random } = myChampion
    const refreshPage = () => {
        myChampion.setRefresh(myChampion.random)
    }

    return (
        <Card key={myChampion.name} className="randomCard">
            <Tilt>
                <Link className="linkStyle" to={`/champion-details/${random.randomChamp}`}>
                    <div style={{ backgroundImage: `url(${random.image})` }} className="card randomPickBg">
                        <Card.Body className="randomChampName">
                            <p className="randomChampName"> {random.randomChamp}</p>
                        </Card.Body>
                    </div>
                </Link>
            </Tilt>

            <div className="d-flex justify-content-around mt-3">
                {random.items.map(img => <img className="RandomItemImg" src={img} alt="randomItemImg" />)}
            </div>
            <div className="randomButtonAlign d-flex justify-content-center mt-4" >
                <button className="btn btn-warning" onClick={refreshPage}>Click to reload!</button>
            </div>
        </Card>


        //  <Box
        //             className='loginBox'
        //         >
        //             <Grid2 className='loginBox' container spacing={0}>
        //                 <Grid2 xs={12} sm={6} md={3}>
        //                     <Stack spacing={3}>
        //                         <div className='loginHeader'>
        //                             <a href="/"><img src={logoNegro} width="40" alt="Logo Random Legends" /></a>
        //                             <div className="region">
        //                                 <p>EUW</p>
        //                                 <i id="globe"><img
        //                                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Globe_icon_2.svg/800px-Globe_icon_2.svg.png"
        //                                     alt='globe' width="20" /></i>
        //                             </div>
        //                         </div>
        //                         <div className="login-body">
        //                             <p>LOGIN</p>
        //                             <Link className="loginLinkToSignup" to='/signup'>Dont have an Account yet? Sign Up</Link>
        //                             <form onSubmit={login}>
        //                                 <input type="text" name="username" onChange={updateUser} placeholder="Username" required="required" />

        //                                 <input type={showPass ? "text" : "password"} name="password" onChange={updateUser} placeholder="Password" required="required" />

        //                                 <a className="btn btn-secondary" onClick={() => { setShowPass(!showPass) }}>{showPass ? "Hide password" : "Show password"}</a>
        //                                 <div className="arrowButton">
        //                                     <Button variant="outlined" type="submit"><ArrowForwardIcon /></Button>
        //                                 </div>
        //                             </form>
        //                             <div className='errorBoxAlign'>
        //                                 {error && <h5 className='errorBox'>Username or Password Incorrect</h5>}
        //                             </div>

        //                         </div>
        //                     </Stack>
        //                 </Grid2>
        //                 <Grid2 id="loginPicture" sm={6} md={9}>
        //                     {/* <video autoPlay muted loop className="myLoginVideo">
        //                             <source src="https://res.cloudinary.com/dalk1vcw9/video/upload/v1664656377/aprilfools-2018-webm_v7xxos.webm" type="video/mp4" />
        //                         </video> */}
        //                 </Grid2>
        //             </Grid2>

        //         </Box>



    )
}

export default RandomPickComponent;



//  <Box
//             className='loginBox'
//         >
//             <Grid2 className='loginBox' container spacing={0}>
//                 <Grid2 xs={12} sm={6} md={3}>
//                     <Stack spacing={3}>
//                         <div className='loginHeader'>
//                             <a href="/"><img src={logoNegro} width="40" alt="Logo Random Legends" /></a>
//                             <div className="region">
//                                 <p>EUW</p>
//                                 <i id="globe"><img
//                                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Globe_icon_2.svg/800px-Globe_icon_2.svg.png"
//                                     alt='globe' width="20" /></i>
//                             </div>
//                         </div>
//                         <div className="login-body">
//                             <p>LOGIN</p>
//                             <Link className="loginLinkToSignup" to='/signup'>Dont have an Account yet? Sign Up</Link>
//                             <form onSubmit={login}>
//                                 <input type="text" name="username" onChange={updateUser} placeholder="Username" required="required" />

//                                 <input type={showPass ? "text" : "password"} name="password" onChange={updateUser} placeholder="Password" required="required" />

//                                 <a className="btn btn-secondary" onClick={() => { setShowPass(!showPass) }}>{showPass ? "Hide password" : "Show password"}</a>
//                                 <div className="arrowButton">
//                                     <Button variant="outlined" type="submit"><ArrowForwardIcon /></Button>
//                                 </div>
//                             </form>
//                             <div className='errorBoxAlign'>
//                                 {error && <h5 className='errorBox'>Username or Password Incorrect</h5>}
//                             </div>

//                         </div>
//                     </Stack>
//                 </Grid2>
//                 <Grid2 id="loginPicture" sm={6} md={9}>
//                     {/* <video autoPlay muted loop className="myLoginVideo">
//                             <source src="https://res.cloudinary.com/dalk1vcw9/video/upload/v1664656377/aprilfools-2018-webm_v7xxos.webm" type="video/mp4" />
//                         </video> */}
//                 </Grid2>
//             </Grid2>

//         </Box>