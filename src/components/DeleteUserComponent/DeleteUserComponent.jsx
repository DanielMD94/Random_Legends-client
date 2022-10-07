import ProfileAxios from "../../services/profileAxios";

const DeleteUserComponent = ({ idUser, refreshAndUser }) => {

    const { setRefreshUser, allUsers } = refreshAndUser
    const profileAxios = new ProfileAxios()


    const userDelete = () => {
        profileAxios.deleteUser(idUser)
            .then(() => {
                setRefreshUser(allUsers);
            })
            .catch((err) => console.log(err))

    }

    return (
        <button className="btnProfile p-3 mx-2 card-link" onClick={userDelete}>Delete</button>
    )
}
export default DeleteUserComponent