import { Card, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./RotationComponent.css"

const RotationComponent = ({ myChampion }) => {
    return (
        <Link className="ChampionListName" to={`/champion-details/${myChampion.name}`}>
            <div className="card championsWeekCard">
                <Card.Img className="GalleryCardImg img-fluid" src={myChampion.img} />
                <Card.Body>
                    <Card.Title className="ChampName text-center"> {myChampion.name} </Card.Title>
                </Card.Body>
            </div>
        </Link>

    )
}

export default RotationComponent;