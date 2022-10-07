import "./ChampionListPage.css"
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import ChampionListComponent from "../../components/ChampionListComponent/ChampionListComponent";
import IndexAxios from "../../services/indexAxios";
import { Skeleton } from "@mui/material";
import SearchBarComponent from "../../components/SearchBarComponent/SearchBarComponent";
import CheckBoxComponent from "../../components/CheckBoxComponent/CheckBoxComponent";

const ChampionListPage = () => {

    const indexAxios = new IndexAxios()

    const [champions, setAllChampions] = useState(null)
    const [copyChamps, setCopyChamps] = useState(null)
    const [queries, setQueries] = useState({})

    const searchCheckBox = (queries) => {
        indexAxios
            .getChampionList(queries)
            .then((championsAndImgs) => {
                setAllChampions(championsAndImgs);
                setCopyChamps(championsAndImgs)

            })
            .catch(err => console.log(err))
    }


    useEffect(() => {
        searchCheckBox(queries)
    }, [])


    return (

        !champions && !copyChamps
            ? <div className="poroSpinner d-flex justify-content-center">
                <Spinner role='status'>
                    <video autoPlay muted loop plays-inline='true' >
                        <source src="https://res.cloudinary.com/dalk1vcw9/video/upload/v1663272676/Poro_base_AN_idle3_o5p599.mp4" />
                    </video>
                </Spinner>
            </div>
            :
            <>
                <div className="d-flex justify-content-center m-3">
                    <SearchBarComponent className="searchBar" championsAndSet={{ copyChamps, setAllChampions }} />
                </div>
                <div>
                    <CheckBoxComponent ListQueries={{ setQueries, setAllChampions, searchCheckBox }} />
                </div>
                {
                    champions.length === 0 && <img className="champNotFoundImg" src="https://res.cloudinary.com/dalk1vcw9/image/upload/v1665089824/Heimerdinger_2_twwcpd.jpg" alt="champNotFound" />
                }
                <div className="championListCard">
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
            </>
    )

}

export default ChampionListPage;