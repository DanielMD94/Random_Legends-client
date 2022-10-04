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


    useEffect(() => {
        indexAxios
            .getChampionList()
            .then((championsAndImgs) => {
                setAllChampions(championsAndImgs);
                setCopyChamps(championsAndImgs)

            })
            .catch(err => console.log(err))
    }, [])
    console.log(champions)
    return (

        !champions && !copyChamps
            ? <Skeleton variant="rectangular" width={210} height={118} animation="wave" />
            :
            <>
                <div>
                    <h1>LA BARRA DE BUSQUEDA</h1>
                    <SearchBarComponent championsAndSet={{ copyChamps, setAllChampions }} />
                </div>
                <div>
                    <CheckBoxComponent championsAndSet={{ copyChamps, setAllChampions }} />
                </div>
                {
                    champions.length === 0 && <h1>Champ not found</h1>
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