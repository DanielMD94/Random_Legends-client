import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import ProfileAxios from "../../services/profileAxios";
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

    console.log(matches)
    return (
        <>
            <form onSubmit={searchSummoner}>
                <input className="championSearchBar" name="summonerName" onChange={updateSummonerName} type="text" value={summonerName.summonerName} />
                <button type="submit" className="btn btn-warning mt-3">Update!</button>
            </form>
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
                    matches.map(match => {
                        const { playersData } = match
                        return playersData.map(player => {
                            return (
                                <button key={player.summonerName} onClick={() => otherSummoner(player.summonerName)} >{player.summonerName}</button>
                            )
                        })
                    })

            }
        </>
    )
}

export default RivalsPage