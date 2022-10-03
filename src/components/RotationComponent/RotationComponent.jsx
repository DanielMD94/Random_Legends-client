import "./RotationComponent.css"
import { Card, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Tilt from 'react-parallax-tilt';


const RotationComponent = ({ myChampion }) => {

    const { img, name } = myChampion

    return (

        <Tilt glareEnable={true} glareMaxOpacity={0.3} glareColor="#FFFFFF" glarePosition="bottom" glareBorderRadius="10px">
            <Link className="championRotationLink" to={`/champion-details/${name}`}>
                <div style={{ backgroundImage: `url(${img})` }} className="card championsRotationBg">
                    <Card.Body>
                        <Card.Title className="championRotationName"> {name} </Card.Title>
                    </Card.Body>
                </div>
            </Link>
        </Tilt>

    )
}

export default RotationComponent;