import logoNegro from '../../assets/LogoNegro.png'
import { useState, useContext } from 'react';
import { AuthContext } from '../../context/auth.context';
import AuthAxios from "../../services/authAxios";
import { useNavigate } from "react-router-dom";



const LoginPage = () => {

    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const { storeToken, authentication } = useContext(AuthContext);
    const authAxios = new AuthAxios()

    const login = (eventHTML) => {
        eventHTML.preventDefault();
        authAxios.login(user).then((response) => {
            storeToken(response.token)
            authentication()

        })
    };

    const updateUser = (eventHTML) => {
        const { value, name } = eventHTML.target;
        setUser({ ...user, [name]: value });
    };



    return (

        <div className="container">
            <div className="login-container">
                <div className="login-top">
                    <a href="/"><img src={logoNegro} width="40" alt="Logo League of Legends" /></a>
                    <div className="language">
                        <p>EUW</p>
                        <i id="globe"><img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Globe_icon_2.svg/800px-Globe_icon_2.svg.png"
                            alt='globe' width="20" /></i>
                    </div>
                </div>
                <div className="login-body">
                    <p>LOGIN</p>

                    <form onSubmit={login}>
                        <input type="text" name="username" onChange={updateUser} placeholder="Username" required="required" />

                        <input type="password" name="password" onChange={updateUser} placeholder="Password" required="required" />

                        <div className="checkbox">
                            <input type="checkbox" id="keep" />
                            <label htmlFor="keep">Remember me</label>
                        </div>

                        <div className="button">
                            <button type="submit">&#x279C;</button>
                        </div>
                        {/* {{ #if messageError }}
                                <p>{{ messageError }}</p>
                                {{/if }} */}
                    </form>
                </div>
                <div className="login-bottom p-2 text-center">
                    <a href="/auth/signUp" className="text-center p-1">Can´t Login? <br /> Create Account</a>
                    <a href="#" target="_blank">Daniel Moreta & Daniel Gonzalez</a>
                </div>
            </div>

            <div className="background-container">
                <div className="background-alert"></div>
            </div>
        </div>

    )
}

export default LoginPage;