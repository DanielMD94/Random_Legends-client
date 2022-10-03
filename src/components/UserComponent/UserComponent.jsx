import './UserComponent.css'
import logoDorado from '../../assets/LogoDorado.png'
import DeleteUserComponent from '../DeleteUserComponent/DeleteUserComponent'
import UpdateUserComponent from '../UpdateUserComponent/UpdateUserComponent'
const UserComponent = ({ user, refreshAndUser }) => {


    const { username, role, summonerName, _id } = user

    return (
        <div className="card user-card">
            <div className="d-flex justify-content-center">
                <img className="img-fluid w-25" src={logoDorado} alt="Summoner" />
            </div>
            <div className="card-body">
                <p className="card-title font-weight-bold text-center"><span className="text-warning">Username:</span> {username}
                </p>
                <p className="card-text font-weight-bold text-center mb-3"> Summoner Name: {summonerName}</p>
                <p className="card-text font-weight-bold text-center"> Role: <span
                    className="text-danger font-italic">{role}</span> </p>
            </div>
            <div className="d-flex justify-content-center">
                <DeleteUserComponent idUser={_id} refreshAndUser={refreshAndUser} />
                <UpdateUserComponent user={user} refreshAndUser={refreshAndUser} />
            </div>
        </div>
    )
}

export default UserComponent