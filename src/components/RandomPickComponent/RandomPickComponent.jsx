import { Card, Row } from "react-bootstrap";
import React from "react";
import './RandomPickComponent.css'


const refreshPage = () => {
    window.location.reload();
}
const RandomPickComponent = ({ myChampion }) => {
    console.log('Card.Detalle', myChampion)
    return (
        <div className="card col-8 mt-4">
            <h1 className="randomChampName text-center">{myChampion.randomChamp}</h1>
            <Card.Img className="RandomChampImg img-fluid" src={myChampion.image} />
            <div className="d-flex justify-content-around">
                <img className="RandomChampImg img-fluid" src={myChampion.items[0]} />
                <img className="RandomChampImg img-fluid" src={myChampion.items[1]} />
                <img className="RandomChampImg img-fluid" src={myChampion.items[2]} />
                <img className="RandomChampImg img-fluid" src={myChampion.items[3]} />
                <img className="RandomChampImg img-fluid" src={myChampion.items[4]} />
                <img className="RandomChampImg img-fluid" src={myChampion.items[5]} />
                <button onClick={refreshPage}>Click to reload!</button>
            </div>
        </div>
    )
}

export default RandomPickComponent;