import { Link } from "react-router-dom"
import "./HomePage.css"

const HomePage = () => {

    return (
        <div className="homePage">
            <div className="overlay" />
            <video autoPlay muted loop className="myVideo">
                <source src="https://res.cloudinary.com/dalk1vcw9/video/upload/v1663265270/Colors_Hero_Desktop_knjk89.mp4" type="video/mp4" />
            </video>
            <div className="content">
                <img src="https://res.cloudinary.com/dalk1vcw9/image/upload/v1664458314/LogoDorado_Hor_mfhaba.png" />
            </div>
            <div className="homeBtnAlign">
                <Link className="homeBtn" to={"/login"}>Get Started</Link>
            </div>
        </div>
    )
}

export default HomePage

