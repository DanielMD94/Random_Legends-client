import "./RotationComponent.css"
import { Card, Row } from "react-bootstrap";
import { Link } from "react-router-dom";


const RotationComponent = ({ myChampion }) => {

    const { img, name } = myChampion

    return (
        <Link className="championRotationLink" to={`/champion-details/${name}`}>
            <div style={{ backgroundImage: `url(${img})` }} className="card championsRotationBg">
                <Card.Body>
                    <Card.Title className="championRotationName"> {name} </Card.Title>
                </Card.Body>
            </div>
        </Link>
    )
}

export default RotationComponent;