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
            <Spinner animation='border' role='status'>
                <span className='visually-hidden'>Loading...</span>
            </Spinner>
        );
    }

    return (
        <div className="profilePage">
            <ProfileComponent loggedUser={user} />
        </div>
    )
}


export default ProfilePage