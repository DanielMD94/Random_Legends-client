import "./RotationPage.css"
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
            ? <div className="poroSpinner d-flex justify-content-center">
                <Spinner role='status'>
                    <video autoPlay muted loop plays-inline>
                        <source src="https://res.cloudinary.com/dalk1vcw9/video/upload/v1663272676/Poro_base_AN_idle3_o5p599.mp4" />
                    </video>
                </Spinner>
            </div>
            : <div className="championRotationCard">
                {weekChampions.map((champion) => {
                    return (
                        <div key={champion.name} className="col-sm-12 col-md-3">
                            < RotationComponent
                                myChampion={champion} />
                        </div>
                    )
                })}
            </div>

    )

}

export default RotationPage;