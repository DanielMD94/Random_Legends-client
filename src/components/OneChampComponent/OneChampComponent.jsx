import { Card, Carousel } from "react-bootstrap"
import { Link } from "react-router-dom"
import SkinsCarousel from "../SkinsCarouselComponent/SkinsCarouselComponent"
import './OneChampComponent.css'

const OneChampComponent = ({ oneChamp }) => {
    console.log('soyONECHAMPPPPP', oneChamp)
    return (
        <Card className="col-8">
            <SkinsCarousel carouselChamp={oneChamp} />
            <Card.Body>
                <Card.Title className="text-center"> <span className="text-danger">{oneChamp.name}</span> {oneChamp.title} </Card.Title>
                <Card.Text className="text-center">
                    {oneChamp.lore}
                </Card.Text>
                <Link
                    to={`/champions`}
                    className="OneChampButton d-flex justify-content-center">
                    <button className="OneChampButtonText btn btn-warning px-4 mt-3">Go Back</button>
                </Link>
            </Card.Body>

        </Card>
    )
}

export default OneChampComponent

