import { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import RandomPickComponent from "../components/RandomPickComponent";
import IndexAxios from "../services/indexAxios";

const RandomPickPage = () => {
    const indexAxios = new IndexAxios()
    const [random, setRandom] = useState(null)
    const refresh = () => {
        setRandom({});
    }

    useEffect(() => {
        indexAxios
            .getRandomChampion()
            .then((randomImgs) => {
                setRandom(randomImgs);
            })
            .catch((err) => console.log(err))
    }, [])



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
                    myChampion={random}
                />
            </Row>
        </Container>
    )
};

export default RandomPickPage;
