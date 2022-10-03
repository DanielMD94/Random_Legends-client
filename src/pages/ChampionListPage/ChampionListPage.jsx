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

    return (

        !champions
            ? <Skeleton variant="rectangular" width={210} height={118} animation="wave" />
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