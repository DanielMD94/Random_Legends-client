import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ProfileComponent from "../../components/ProfileComponent/ProfileComponent";
import ProfileAxios from "../../services/profileAxios";
import "./ProfilePage.css"

const ProfilePage = () => {
    const { idUsername } = useParams();
    const profileAxios = new ProfileAxios()
    const [user, setUser] = useState(null)

    useEffect(() => {
        profileAxios
            .getUserProfile(idUsername)
            .then((myUser) => {
                console.log(myUser)
                setUser(myUser);

            })
            .catch((err) => console.log(err))
    }, []);

    if (!user) {
        return (
            <div className="poroSpinner d-flex justify-content-center">
                <Spinner role='status'>
                    <video autoPlay muted loop plays-inline>
                        <source src="https://res.cloudinary.com/dalk1vcw9/video/upload/v1663272676/Poro_base_AN_idle3_o5p599.mp4" />
                    </video>
                </Spinner>
            </div>
        );
    }

    return (
        <div className="profilePage">
            <ProfileComponent loggedUser={user} />
        </div>
    )
}


export default ProfilePage