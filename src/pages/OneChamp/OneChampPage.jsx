import "./OneChampPage.css"
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import IndexAxios from "../../services/indexAxios"
import OneChampComponent from "../../components/OneChampComponent/OneChampComponent";

const OneChampPage = () => {
    const { name } = useParams();
    const indexAxios = new IndexAxios()
    const [champion, setChampion] = useState(null)
    const [theData, setData] = useState(null)


    useEffect(() => {
        indexAxios
            .getChampionDetails(name)
            .then((champ) => {
                setChampion(champ);
            })
            .catch((err) => console.log(err))
        indexAxios
            .getChampionDetailsGraph(name)
            .then((data) => {
                setData(data);
            })
            .catch((err) => console.log(err))

    }, []);

    if (!champion || !theData) {
        return (
            <div className="poroSpinner d-flex justify-content-center">
                <Spinner role='status'>
                    <video autoPlay muted loop plays-inline={true}>
                        <source src="https://res.cloudinary.com/dalk1vcw9/video/upload/v1663272676/Poro_base_AN_idle3_o5p599.mp4" />
                    </video>
                </Spinner>
            </div>
        );
    }

    return (

        <div className="oneChampPage d-flex justify-content-center mt-3">
            <OneChampComponent oneChamp={champion} graphData={theData} />
        </div>

    )

}

export default OneChampPage