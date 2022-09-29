import { Card, Row } from "react-bootstrap";
import React from "react";
import './RandomPickComponent.css'


const RandomPickComponent = ({ myChampion }) => {
    console.log("soyMYCHAMPIONNN", myChampion)
    const refreshPage = () => {
        myChampion.setRefresh(myChampion.random)
    }


    console.log('Card.Detalle', myChampion)
    return (
        <div className="randomPickPage card col-8 mt-4">
            <h1 className="randomChampName text-center">{myChampion.random.randomChamp}</h1>
            <Card.Img className="RandomChampImg img-fluid" src={myChampion.random.image} />
            <div className="d-flex justify-content-around">
                <img className="RandomChampImg img-fluid" src={myChampion.random.items[0]} />
                <img className="RandomChampImg img-fluid" src={myChampion.random.items[1]} />
                <img className="RandomChampImg img-fluid" src={myChampion.random.items[2]} />
                <img className="RandomChampImg img-fluid" src={myChampion.random.items[3]} />
                <img className="RandomChampImg img-fluid" src={myChampion.random.items[4]} />
                <img className="RandomChampImg img-fluid" src={myChampion.random.items[5]} />
                <button onClick={refreshPage}>Click to reload!</button>
            </div>
        </div>
    )
}

export default RandomPickComponent;