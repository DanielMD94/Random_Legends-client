import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import ChampionListComponent from "../components/ChampionListComponent";
import IndexAxios from "../services/indexAxios";


const ChampionsPage = () => {
    const indexAxios = new IndexAxios()
    const [champions, setAllChampions] = useState([])

    useEffect(() => {
        indexAxios.getChampionList()
            .then((championsAndImgs) => {
                setAllChampions(championsAndImgs);
            })
            .catch((err) => console.log(err))
    }, [])

    return (

        !champions.length
            ? <Spinner className="LoadingSpinner d-flex" animation='border' role='status'>
                <span className='visually-hidden justify-content-center'>Loading...</span>
            </Spinner>
            : <div className="ChampionListCard">
                {champions.map((champion) => {
                    return (
                        <div key={champion.name} className="col-4">
                            < ChampionListComponent
                                myChampion={champion}
                                img={champion.img} />
                        </div>
                    )
                })}
            </div>

    )

}

export default ChampionsPage;