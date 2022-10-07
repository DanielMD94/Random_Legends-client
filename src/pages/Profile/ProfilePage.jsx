import { useContext, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import LastGamesComponent from "../../components/LastGamesComponent/LastGamesComponent";
import ProfileComponent from "../../components/ProfileComponent/ProfileComponent";
import Tostadita from "../../components/ToastComponent/ToastComponent";
import { MessageContext } from "../../context/message.context";
import ProfileAxios from "../../services/profileAxios";
import "./ProfilePage.css"

const ProfilePage = () => {
    const { showMessage, setShowMessage } = useContext(MessageContext)
    const { idUsername } = useParams();
    const profileAxios = new ProfileAxios()
    const [user, setUser] = useState(null)
    const [matches, setMatches] = useState(null)

    useEffect(() => {
        profileAxios
            .getUserProfile(idUsername)
            .then((myUser) => {
                setUser(myUser);

            })
            .catch((err) => console.log(err))
        profileAxios
            .getInfoMatches()
            .then(allMatches => {
                setMatches(allMatches)
            })
            .catch((err) => console.log(err))
    }, []);

    if (!user || !matches) {
        return (
            <div className="poroSpinner d-flex justify-content-center">
                <Spinner role='status'>
                    <video autoPlay muted loop >
                        <source src="https://res.cloudinary.com/dalk1vcw9/video/upload/v1663272676/Poro_base_AN_idle3_o5p599.mp4" />
                    </video>
                </Spinner>
            </div>
        );
    } else

        return (
            <>
                <div className="profilePage">
                    <ProfileComponent loggedUser={{ user, matches }} />
                    {showMessage?.show && <Tostadita />}
                </div>
            </>
        )
}


export default ProfilePage