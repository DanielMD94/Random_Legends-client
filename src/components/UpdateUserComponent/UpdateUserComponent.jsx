import { useContext, useState } from "react";
import ProfileAxios from "../../services/profileAxios";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AuthContext } from "../../context/auth.context";

const UpdateUserComponent = ({ user, refreshAndUser }) => {

    const { user: pg23, isLoading, isLoggedIn, logOut } = useContext(AuthContext);
    const { setRefreshUser, allUsers } = refreshAndUser
    const { username, role, summonerName, _id } = user

    const profileAxios = new ProfileAxios()
    const [userForUpdate, setUserForUpdate] = useState({
        username: username,
        role: role,
        summonerName: summonerName
    });

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const update = (eventHTML) => {
        eventHTML.preventDefault();
        profileAxios.updateUser(_id, userForUpdate)
            .then(() => {
                setRefreshUser(allUsers);
            })
            .catch((err) => console.log(err))
    };

    const updateUser = (eventHTML) => {
        const { name, value } = eventHTML.target;
        setUserForUpdate({ ...userForUpdate, [name]: value });
    };

    return (
        <>
            <>
                <button className="btnProfile p-3 mx-2 card-link" onClick={handleShow}>Update</button>
            </>

            <Modal show={show} onHide={handleClose}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        User update
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className="text-dark text-center h2 mt-4">Editing as Admin: <span className="text-warning">{pg23.username} </span></p>
                    <div className="d-flex align-items-center flex-column">
                        <form onSubmit={update}>
                            <div className="mb-3">
                                <label className="form-label text-dark">Username:</label>
                                <input type="text" name="username" onChange={updateUser} value={userForUpdate.username} className="form-control" />
                                <label className="form-label text-dark mt-3">Summoner Name:</label>
                                <input type="text" name="summonerName" onChange={updateUser} value={userForUpdate.summonerName} className="form-control" />
                            </div>
                            <select className="form-select mt-3" name="role" onChange={updateUser} aria-label="Default select example">
                                <option value="IRON">IRON</option>
                                <option value="BRONZE">BRONZE</option>
                                <option value="SILVER">SILVER</option>
                                <option value="GOLD">GOLD</option>
                                <option value="PLATINUM">PLATINUM</option>
                                <option value="DIAMOND">DIAMOND</option>
                                <option value="MASTER">MASTER</option>
                                <option value="GRANDMASTER">GRANDMASTER</option>
                                <option value="CHALLENGER">CHALLENGER</option>
                            </select>
                            <button type="submit" onClick={handleClose} className="btn btn-warning mt-3">Update!</button>
                        </form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default UpdateUserComponent