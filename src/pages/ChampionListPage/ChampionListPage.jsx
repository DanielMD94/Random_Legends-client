import "./ChampionListPage.css"
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import ChampionListComponent from "../../components/ChampionListComponent/ChampionListComponent";
import IndexAxios from "../../services/indexAxios";
import { Skeleton } from "@mui/material";

const ChampionListPage = () => {

    const indexAxios = new IndexAxios()

    const [champions, setAllChampions] = useState([])

    useEffect(() => {
        indexAxios
            .getChampionList()
            .then((championsAndImgs) => {
                setAllChampions(championsAndImgs);
            })
            .catch(err => console.log(err))
    }, [])
    console.log(champions)
    return (

        !champions.length
            ? <div className="poroSpinner d-flex justify-content-center">
                <Spinner role='status'>
                    <video autoPlay muted loop plays-inline>
                        <source src="https://res.cloudinary.com/dalk1vcw9/video/upload/v1663272676/Poro_base_AN_idle3_o5p599.mp4" />
                    </video>
                </Spinner>
            </div>
            : <div className="championListCard">
                {champions.map((champion) => {
                    return (
                        <div key={champion.name} className="col-12 col-md-4">
                            < ChampionListComponent
                                myChampion={champion}
                            />
                        </div>
                    )
                })}
            </div>

    )

}

export default ChampionListPage;