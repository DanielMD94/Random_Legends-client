import { Card, Row } from "react-bootstrap";

const RandomPickComponent = ({ myChampion }) => {
    return (
        <div className="card">
            <Card.Img className="RandomChampImg img-fluid" src={myChampion.image} />
            <Card.Img className="RandomItemImg img-fluid" src={myChampion.items[0]} />
            <Card.Img className="RandomItemImg img-fluid" src={myChampion.items[1]} />
            <Card.Img className="RandomItemImg img-fluid" src={myChampion.items[2]} />
            <Card.Img className="RandomItemImg img-fluid" src={myChampion.items[3]} />
            <Card.Img className="RandomItemImg img-fluid" src={myChampion.items[4]} />
            <Card.Img className="RandomItemImg img-fluid" src={myChampion.items[5]} />
        </div>
    )
}


export default RandomPickComponent;


