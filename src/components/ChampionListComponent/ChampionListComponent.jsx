import { Card, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import './ChampionListComponent.css'

const ChampionListComponent = ({ myChampion }) => {
    console.log('soy MYCHAMPION', myChampion)
    return (
        <Link className="ChampionListName" to={`/champion-details/${myChampion.name}`}>
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