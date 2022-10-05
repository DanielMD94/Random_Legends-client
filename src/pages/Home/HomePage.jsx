import { Link } from "react-router-dom"
import { useContext, useEffect } from "react"
import "./HomePage.css"
import Tostadita from "../../components/ToastComponent/ToastComponent"
import { MessageContext } from "../../context/message.context"
const HomePage = () => {

    const { showMessage, setShowMessage } = useContext(MessageContext)

    useEffect(() => {
        setShowMessage({
            show: true,
            title: 'TIKITIKI 🍑',
            message: 'MIAU MIAU'
        })
    }, [])

    return (


        <div className="homePage">
            <div className="overlay" />
            <video autoPlay muted loop className="myVideo">
                <source src="https://res.cloudinary.com/dalk1vcw9/video/upload/v1664720524/c-o-kda-worlds-login_s4vfso.webm" />
            </video>
            <div className="content">
                <img src="https://res.cloudinary.com/dalk1vcw9/image/upload/v1664458314/LogoDorado_Hor_mfhaba.png" alt="homeImage" />
            </div>
            <Link to='/login' className="homeBtnAlign">
                <div className="box-3">
                    <div className="button btn-two">
                        <p className="loginLink">GET STARTED</p>
                    </div>
                </div>
            </Link>

            {
                showMessage?.show && <Tostadita />
            }

        </div>
    )
}

export default HomePage

