import { Card, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import './ChampionListComponent.css'
import Tilt from 'react-parallax-tilt';
import FavChampComponent from "../FavChampComponent/FavChampComponent";

const ChampionListComponent = ({ myChampion }) => {

    const { img, name, id } = myChampion



    return (
        <>
            <Tilt glareEnable={true} glareMaxOpacity={0} glareColor="#FFFFFF" glarePosition="bottom" glareBorderRadius="10px">
                <Link className="championListLink" to={`/champion-details/${name}`}>
                    <div style={{ backgroundImage: `url(${img})` }} className="card championsListBg">
                        <Card.Body>
                            <Card.Title className="championListName"> {name} </Card.Title>
                        </Card.Body>
                    </div>
                </Link>
            </Tilt>
            <div className="d-flex justify-content-center">
                <FavChampComponent champId={id} />
            </div>
        </>
    )
}

export default ChampionListComponent;