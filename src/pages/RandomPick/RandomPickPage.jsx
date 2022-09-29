import { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import RandomPickComponent from "../../components/RandomPickComponent/RandomPickComponent";
import IndexAxios from "../../services/indexAxios";
import "./RandomPickPage.css"

const RandomPickPage = () => {
    const indexAxios = new IndexAxios()
    const [random, setRandom] = useState(null)
    const [refresh, setRefresh] = useState(null)

    useEffect(() => {
        indexAxios
            .getRandomChampion()
            .then((randomImgs) => {
                setRandom(randomImgs);
            })
            .catch((err) => console.log(err))
    }, [refresh])

    if (!random) {
        return (
            <Spinner animation='border' role='status'>
                <span className='visually-hidden'>Loading...</span>
            </Spinner>
        );
    }

    return (
        <Container>
            <Row className="d-flex justify-content-center">
                < RandomPickComponent
                    myChampion={{ random, setRefresh }}
                />
            </Row>
        </Container>
    )
};

export default RandomPickPage;
