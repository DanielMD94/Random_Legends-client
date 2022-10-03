import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import DeleteUserComponent from "../../components/DeleteUserComponent/DeleteUserComponent";
import UserComponent from "../../components/UserComponent/UserComponent";
import ProfileAxios from "../../services/profileAxios";

const AdminPage = () => {

    const profileAxios = new ProfileAxios()
    const [allUsers, setAllUsers] = useState(null)
    const [refreshUser, setRefreshUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        profileAxios.getAllUsers()
            .then((users) => {
                setAllUsers(users);
                setLoading(false)
            })
            .catch((err) => console.log(err))
    }, [refreshUser]);

    return (
        <>
            {
                loading
                    ?
                    <Spinner className="LoadingSpinner d-flex" animation='border' role='status'></Spinner>
                    :
                    <>
                        <div className="d-flex flex-row justify-content-around mt-4">
                            {
                                allUsers.map(user => <UserComponent key={user._id} user={user} refreshAndUser={{ setRefreshUser, allUsers }} />)
                            }
                        </div>
                        < div className="d-flex justify-content-center">
                            <video autoPlay muted loop plays-inline='true'>
                                <source src="https://res.cloudinary.com/dalk1vcw9/video/upload/v1663272676/Poro_base_AN_idle3_o5p599.mp4" />
                            </video>
                        </div>
                    </>
            }

        </>
    )
}


export default AdminPage