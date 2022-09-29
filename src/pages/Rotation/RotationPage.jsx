import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap"
import RotationComponent from "../../components/RotationComponent/RotationComponent"
import IndexAxios from "../../services/indexAxios";

const RotationPage = () => {
    const indexAxios = new IndexAxios()
    const [weekChampions, setWeekChampions] = useState([])

    useEffect(() => {
        indexAxios.getWeeklyRotation()
            .then((championsAndImgs) => {
                setWeekChampions(championsAndImgs);
                console.log("soy champs and imgs", championsAndImgs)
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        !weekChampions.length
            ? <Spinner className="LoadingSpinner d-flex" animation='border' role='status'>
                <span className='visually-hidden justify-content-center'>Loading...</span>
            </Spinner>
            : <div className="ChampionListCard">
                {weekChampions.map((champion) => {
                    return (
                        <div key={champion.name} className="col-3">
                            < RotationComponent
                                myChampion={champion}
                                img={champion.img} />
                        </div>
                    )
                })}
            </div>

    )

}

export default RotationPage;