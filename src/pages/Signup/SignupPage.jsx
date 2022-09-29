import { useState } from "react";
import AuthAxios from "../../services/authAxios";
import './SignupPage.css'
import logoNegro from '../../assets/LogoNegro.png'
import { useNavigate } from "react-router-dom";

const SignupPage = () => {

    const authAxios = new AuthAxios()
    const [newUser, setNewUser] = useState({});
    const navigate = useNavigate();
    // Estad de error

    const createNewUser = (eventHTML) => {
        eventHTML.preventDefault();
        authAxios.registro(newUser).then((response) => {
            console.log(response);
            navigate('/login')
        });
    };

    const updateNewUser = (eventHTML) => {
        const { name, value } = eventHTML.target;
        setNewUser({ ...newUser, [name]: value });
    };


    return (
        <div className="container">
            <div className="login-container">
                <div className="login-top">
                    <img src={logoNegro} width="40" alt="RlLogo" />
                    <div className="language">
                        <p>EUW</p>
                        <i id="globe"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Globe_icon_2.svg/800px-Globe_icon_2.svg.png" alt='globe' width="20" /></i>
                    </div>
                </div>
                <div className="login-body">
                    <p>SIGNUP</p>

                    <form onSubmit={createNewUser}>
                        <input type="text" name="username" onChange={updateNewUser} placeholder="Username" required="required" />

                        <input type="password" name="password" onChange={updateNewUser} placeholder="Password" required="required" />

                        <input type="text" name="summonerName" onChange={updateNewUser} placeholder="Summoner Name (optional)" />

                        <div className="button">
                            <button type="submit">&#x279C;</button>
                        </div>
                        {/* {{ #if messageError }}
                                    <p>{{ messageError }}</p>
                                    {{/if }} */}
                    </form>
                </div>
            </div>
            <div className="background-container2">
                <div className="background-alert"></div>
            </div>
        </div>
    )
}

export default SignupPage