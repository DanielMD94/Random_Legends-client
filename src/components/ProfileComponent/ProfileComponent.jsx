import "./ProfileComponent.css"
import * as React from 'react';
import Card from 'react-bootstrap/Card';
import LastGamesComponent from "../LastGamesComponent/LastGamesComponent";

const ProfileComponent = ({ loggedUser }) => {
    const { user, matches } = loggedUser
    const { foundUser, info, lvl } = user
    const { username, summonerName, role, favChamp } = foundUser
    const { rank, leaguePoints, losses, tier, wins } = info[0]

    return (
        <div>

            <div className="d-flex justify-content-center">
                <video className="profileVideo" autoPlay muted loop >
                    < source src="https://res.cloudinary.com/dalk1vcw9/video/upload/v1663273316/background-video-d-01_gcjutm.mp4" />
                </video>
            </div>

            <div className="profileElements">

                <div className="cardProfileAlign">
                    <Card className="cardProfileInformation" style={{ width: '45rem', textAlign: 'center' }}>

                        <div className="cardVideoAlign">
                            <video className="cardVideo" autoPlay muted loop >
                                < source src="https://res.cloudinary.com/dalk1vcw9/video/upload/v1664656377/aprilfools-2018-webm_v7xxos.webm" />
                            </video>
                        </div>

                        <Card.Body>
                            <Card.Title className="profileUsername" style={{ color: '#c79b3b' }}>{username}: {role}</Card.Title>
                            <img className="cardBanner" src="https://res.cloudinary.com/dalk1vcw9/image/upload/v1664735575/lolDecoration_axoqyx.png" width="450" alt="Banner" />
                            <p>Summoner Name: {summonerName}</p>
                            <p>Elo: {tier} {rank} {leaguePoints} points</p>
                            <p>Wins: {wins}</p>
                            <p>Losses: {losses}</p>
                        </Card.Body>

                    </Card>
                </div>

                <div className="favChamp">
                    <div className="scrollDiv">
                        {
                            favChamp.map(champ => {
                                return (
                                    <div key={champ.id} className="favChampCard card bg-dark text-white">
                                        <img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champ.id}_0.jpg`} className="favChampImg card-img" alt="favChampImgAlt" />
                                        <div className="card-img-overlay favChampName">
                                            <p className="card-title">{champ.id}</p>
                                        </div>
                                    </div>
                                )

                            })
                        }
                    </div>
                </div>

            </div>
            <div className="myLastGames">Last Games</div>
            <div className="matchesBox">
                <LastGamesComponent foundMatches={matches} name={summonerName} />
            </div>
        </div>
    )
}


export default ProfileComponent