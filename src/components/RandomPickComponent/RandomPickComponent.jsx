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
        <div className="randomCard card col-8">
            <h1 className="randomChampName text-center">{myChampion.random.randomChamp}</h1>
            <Card.Img className="RandomChampImg img-fluid" src={myChampion.random.image} />
            <div className="d-flex justify-content-around mt-3">
                <img className="RandomChampImg img-fluid" src={myChampion.random.items[0]} />
                <img className="RandomChampImg img-fluid" src={myChampion.random.items[1]} />
                <img className="RandomChampImg img-fluid" src={myChampion.random.items[2]} />
                <img className="RandomChampImg img-fluid" src={myChampion.random.items[3]} />
                <img className="RandomChampImg img-fluid" src={myChampion.random.items[4]} />
                <img className="RandomChampImg img-fluid" src={myChampion.random.items[5]} />
            </div>
            <button className="randomButton btn btn-warning mt-4" onClick={refreshPage}>Click to reload!</button>
        </div>
    )
}

export default RandomPickComponent;