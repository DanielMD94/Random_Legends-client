import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"

const OneChampComponent = ({ oneChamp }) => {
    return (
        <Card className="col-8">
            <Card.Img className="GalleryCardImg img-fluid" src={oneChamp.image} />
            <Card.Body>
                <Card.Title className="text-center"> <span className="text-danger">{oneChamp.name}</span> {oneChamp.title} </Card.Title>
                <Card.Text className="text-center">
                    {oneChamp.lore}
                </Card.Text>
                <Link
                    to={`/champions`}
                    className="OneChampButton d-flex justify-content-center">
                    <button className="OneChampButtonText btn btn-warning px-4">Go Back</button>
                </Link>
            </Card.Body>

        </Card>
    )
}

export default OneChampComponent