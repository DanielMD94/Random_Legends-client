import "./ProfileComponent.css"

const ProfileComponent = ({ loggedUser }) => {
    const { foundUser, info, lvl } = loggedUser
    const { username, summonerName, role } = foundUser
    const { rank, leaguePoints, losses, tier, wins } = info[0]


    return (
        <div className="ProfileText">
            <h1>{username}</h1>
            <h1>{summonerName}</h1>
            <p>{lvl}</p>
        </div>
    )
}
export default ProfileComponent