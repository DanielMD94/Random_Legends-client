import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import ProfileAxios from "../../services/profileAxios";
import './RivalsPage.css'
import { Tooltip, IconButton } from "@mui/material";
import { AutoGraph } from "@mui/icons-material";
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import AccessibleForwardIcon from '@mui/icons-material/AccessibleForward';
import SearchIcon from '@mui/icons-material/Search';
const RivalsPage = () => {

    const profileAxios = new ProfileAxios()
    const [matches, setMatches] = useState(null)
    const [summonerName, setSummonerName] = useState({ summonerName: '' })
    const [refresh, setRefresh] = useState(null)


    const searchSummoner = (e) => {
        e.preventDefault()
        profileAxios
            .getRivalsMatches(summonerName)
            .then(Allmatches => {
                setMatches(Allmatches)
                setSummonerName({ summonerName: '' })
            })
            .catch((err) => console.log(err))
    }

    const updateSummonerName = (eventHTML) => {
        const { value, name } = eventHTML.target;
        setSummonerName({ [name]: value });
    };

    const otherSummoner = (summonerName) => {
        profileAxios
            .getRivalsMatches({ summonerName })
            .then(Allmatches => {
                setMatches(Allmatches)
            })
            .catch((err) => console.log(err))
    }


    return (
        <>
            <div className="rivalsBoxSearch">
                <form className="rivalsBoxSearch" onSubmit={searchSummoner}>
                    <input className="rivalsInputSearch" name="summonerName" onChange={updateSummonerName} type="text" value={summonerName.summonerName} />
                    <div className="searchButtonAlign">
                        <button type="submit" className="searchButtonRivals btn btn-warning mt-3"><SearchIcon /></button>
                    </div>
                </form>
            </div>

            {
                !matches
                    ?
                    <div className="poroSpinner d-flex justify-content-center">
                        <Spinner role='status'>
                            <video autoPlay muted loop >
                                <source src="https://res.cloudinary.com/dalk1vcw9/video/upload/v1663272676/Poro_base_AN_idle3_o5p599.mp4" />
                            </video>
                        </Spinner>
                    </div>
                    :

                    matches.map((match, index) => {
                        const teamsData = match.teamsData;
                        return (
                            <div className="container">
                                <div key={index} className="row mt-3 text-center justify-content-center">
                                    {<h3 style={{ color: 'orange' }}>Game {index + 1}</h3>}
                                    {
                                        teamsData.map((data, index) => {
                                            const { playersData } = data
                                            return (
                                                <div key={index} className="col-5 m-1">
                                                    <h5 style={{ color: 'orange' }}>{index ? "Red" : "Blue"} Team </h5>
                                                    {
                                                        teamsData[index].win === true
                                                            ? <h5 style={{ color: 'green' }} >Win</h5>
                                                            : <h5 style={{ color: 'red' }}>Lost</h5>
                                                    }
                                                    <h5 style={{ color: 'lightBlue' }}>{teamsData[index].teamKills}/{teamsData[index].teamDeadths}/{teamsData[index].teamAssists} </h5>
                                                    <h5 style={{ color: 'purple' }}>TOWERS: {teamsData[index].tower}</h5>
                                                    <h5 style={{ color: 'purple' }}>INHIBITORS: {teamsData[index].inhibitor}</h5>
                                                    <ul className="text-start" style={{ listStyleType: 'none' }}>
                                                        {playersData.map((player, index) => {
                                                            return (
                                                                <li key={index}>
                                                                    <img className="rivalsChampImage" src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${player.championName}_0.jpg`}></img>
                                                                    <a
                                                                        key={player.summonerName}
                                                                        style={{ color: 'white', cursor: 'pointer', marginRight: '15px' }}
                                                                        onMouseOver={(e) => { e.target.style.color = "blue" }}
                                                                        onMouseLeave={(e) => { e.target.style.color = "white" }}
                                                                        onClick={() => otherSummoner(player.summonerName)}
                                                                    >
                                                                        {player.summonerName}
                                                                    </a>
                                                                    <span style={{ color: 'lightBlue' }}>{player.kills + "/" + player.deaths + "/" + player.assists}</span>
                                                                    <Tooltip title={"KDA - " + player.kda} arrow>
                                                                        <IconButton>
                                                                            <AutoGraph color='secondary' />
                                                                        </IconButton>
                                                                    </Tooltip>
                                                                    <Tooltip title={"Damage dealt to Champions - " + player.totalDamageDealtToChampions} arrow>
                                                                        <IconButton>
                                                                            <AccessibleForwardIcon color='error' />
                                                                        </IconButton>
                                                                    </Tooltip>
                                                                    <Tooltip title={"Damage taken - " + player.totalDamageTaken} arrow>
                                                                        <IconButton>
                                                                            <HealthAndSafetyIcon color='warning' />
                                                                        </IconButton>
                                                                    </Tooltip>
                                                                </li>
                                                            )
                                                        })}
                                                    </ul>
                                                </div>
                                            )

                                        })

                                    }
                                </div>
                            </div>
                        )
                    })
            }
        </>
    )
}

export default RivalsPage