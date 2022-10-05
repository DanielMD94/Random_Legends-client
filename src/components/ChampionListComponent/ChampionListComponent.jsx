import { Card, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import './ChampionListComponent.css'
import Tilt from 'react-parallax-tilt';

const ChampionListComponent = ({ myChampion }) => {

    const { img, name } = myChampion

    return (

        <Tilt glareEnable={true} glareMaxOpacity={0} glareColor="#FFFFFF" glarePosition="bottom" glareBorderRadius="10px">
            <Link className="championListLink" to={`/champion-details/${name}`}>
                <div style={{ backgroundImage: `url(${img})` }} className="card championsListBg">
                    <Card.Body>
                        <Card.Title className="championListName"> {name} </Card.Title>
                    </Card.Body>
                </div>
            </Link>
        </Tilt>

    )
}

export default ChampionListComponent;