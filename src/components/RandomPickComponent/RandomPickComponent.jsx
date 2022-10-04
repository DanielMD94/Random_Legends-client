import { Card, Row } from "react-bootstrap";
import React from "react";
import './RandomPickComponent.css'
import Tilt from 'react-parallax-tilt';
import { Link } from "react-router-dom";


const RandomPickComponent = ({ myChampion }) => {
    const { random } = myChampion
    const refreshPage = () => {
        myChampion.setRefresh(myChampion.random)
    }

    return (
        <Card className="randomCard">
            <Tilt>
                <Link to={`/champion-details/${random.randomChamp}`} className="d-flex justify-content-center">
                    <img className="RandomChampImg" src={random.image} />
                    <h1 className="randomChampName text-center">{random.randomChamp}</h1>
                </Link>
            </Tilt>
            <div className="d-flex justify-content-around mt-3">
                {random.items.map(img => <img className="RandomItemImg" src={img} />)}
            </div>
            <div className="randomButtonAlign" >
                <button className="randomButton mt-4" onClick={refreshPage}>Click to reload!</button>
            </div>
        </Card>
    )
}

export default RandomPickComponent;