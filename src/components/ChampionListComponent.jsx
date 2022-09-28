import { Card, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const ChampionListComponent = ({ myChampion }) => {
    return (
        <Link className="ChampionListLink" to={`/champion-details/${myChampion.name}`}>
            <div className="card">
                <Card.Img className="GalleryCardImg img-fluid" src={myChampion.img} />
                <Card.Body>
                    <Card.Title className="text-center"> {myChampion.name} </Card.Title>
                </Card.Body>
            </div>
        </Link>

    )
}



export default ChampionListComponent;
