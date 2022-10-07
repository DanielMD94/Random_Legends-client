import './RandomPickComponent.css'
import { Card, Row } from "react-bootstrap";
import React from "react";
import Tilt from 'react-parallax-tilt';
import { Link } from "react-router-dom";


const RandomPickComponent = ({ myChampion }) => {
    const { random } = myChampion
    const refreshPage = () => {
        myChampion.setRefresh(myChampion.random)
    }

    return (
        <Card key={myChampion.name} className="randomCard">
            <Tilt>
                <Link className="linkStyle" to={`/champion-details/${random.randomChamp}`}>
                    <div style={{ backgroundImage: `url(${random.image})` }} className="card randomPickBg">
                        <Card.Body className="randomChampName">
                            <p className="randomChampName"> {random.randomChamp}</p>
                        </Card.Body>
                    </div>
                </Link>
            </Tilt>

            <div className="d-flex justify-content-around mt-3">
                {random.items.map(img => <img className="RandomItemImg" src={img} alt="randomItemImg" />)}
            </div>
            <div className="randomButtonAlign d-flex justify-content-center mt-4" >
                <button className="btn btn-warning" onClick={refreshPage}>Click to reload!</button>
            </div>
        </Card>

    )
}

export default RandomPickComponent;
