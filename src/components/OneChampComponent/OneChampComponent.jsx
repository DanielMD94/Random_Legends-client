import './OneChampComponent.css'
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import SkinsCarousel from "../SkinsCarouselComponent/SkinsCarouselComponent"
import { Card, Button, CardActionArea, CardActions, CardMedia, CardContent, Typography } from '@mui/material';
import StatsGraphicComponent from '../StatsGraphicComponent/StatsGraphicComponent';
import { Modal, Form } from 'react-bootstrap';
import IndexAxios from "../../services/indexAxios"


const OneChampComponent = ({ oneChamp, graphData }) => {
    const indexAxios = new IndexAxios();
    const [show, setShow] = useState(false);
    const [champions, setChampions] = useState([""]);
    const [showSelect, setShowSelect] = useState('d-none');
    const [champToCompare, setChampToCompare] = useState(null);
    const [champs, setChamps] = useState([]);
    const [smallStats, setSmallStats] = useState([{ label: "", "": "" }]);
    const [bigStats, setBigStats] = useState([{ label: "", "": "" }]);

    useEffect(() => {
        setChampions([oneChamp.name])
        setSmallStats(graphData.smallData);
        setBigStats(graphData.bigData);
    }, [])

    const handleClose = () => {
        setShow(false)
        setShowSelect('d-none')
        setChampions([oneChamp.name])
        setSmallStats(graphData.smallData);
        setBigStats(graphData.bigData);
    };
    const handleShow = () => setShow(true);
    const handleChange = (e) => setChampToCompare(e.target.value);
    const handleCompare = () => {
        setShowSelect('d-block');
        indexAxios
            .getAllChamps()
            .then((response) => {
                setChamps(response);
            })
            .catch((err) => console.log(err))
    }
    const letsCompare = () => {
        let champs = champions;
        let prevSmallStats = smallStats;
        let prevBigStats = bigStats;
        champs.push(champToCompare);
        setShowSelect('d-none')

        indexAxios
            .getChampionDetailsGraph(champToCompare)
            .then((data) => {
                data.smallData.map((object, index) => {
                    prevSmallStats[index][champToCompare] = object[champToCompare];
                })

                data.bigData.map((object, index) => {
                    prevBigStats[index][champToCompare] = object[champToCompare];
                })

            })
            .catch((err) => console.log(err))
        setSmallStats(prevSmallStats)
        setBigStats(prevBigStats)
        setChampions(champs);
        setShow(false)
        setTimeout(() => { setShow(true) }, 200);
    }

    return (
        <div>

            < Card className="champDetailsCard">
                <CardActionArea >
                    <CardMedia>
                        <SkinsCarousel carouselChamp={oneChamp} />
                    </ CardMedia >
                    <CardContent>
                        <Typography className="oneChampName" gutterBottom variant="h5" component="div">
                            <span className="text-danger">{oneChamp.name}:</span> {oneChamp.title}
                        </Typography>
                        <Typography variant="body3" color="text.dark">
                            {oneChamp.lore}
                        </Typography>
                        <div className='d-flex justify-content-center'>
                            <div className='gameplayTips col-sm-12 col-md-10 mt-4'>
                                <Typography variant="body3" color="text.dark">
                                    {oneChamp.allytips.length > 0 &&
                                        <>
                                            <p className='h4 text-danger text-center'>Ally Tips</p>
                                            <p>{oneChamp.allytips}</p>
                                        </>

                                    }
                                </Typography>
                                <Typography variant=" body3" color="text.dark">
                                    {oneChamp.enemytips.length > 0 &&
                                        <>
                                            <p className='h4 text-danger text-center mt-4'>Enemy Tips</p>
                                            <p>{oneChamp.enemytips}</p>
                                        </>

                                    }
                                </Typography>
                            </div>
                        </div>

                        <Modal show={show} onHide={handleClose}
                            size="lg"
                            aria-labelledby="contained-modal-title-vcenter"
                            centered>
                            <Modal.Header closeButton>
                                <Modal.Title id="contained-modal-title-vcenter">
                                    <p className="modalChampName">{oneChamp.name} stats</p>
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <StatsGraphicComponent data={smallStats} champs={champions} />
                                <StatsGraphicComponent data={bigStats} champs={champions} />
                                <div className={showSelect}>
                                    <Form.Select onChange={handleChange}>
                                        <option>Select a champ to compare with</option>
                                        {champs.map((data, index) => {
                                            return (
                                                <option key={index} value={data.id}>
                                                    {data.name}
                                                </option>
                                            )
                                        })}
                                    </Form.Select>
                                    <Button onClick={letsCompare}>Apply</Button>
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button id="compare" onClick={handleCompare}>Compare</Button>
                                <Button onClick={handleClose}>Close</Button>
                            </Modal.Footer>
                        </Modal>

                    </CardContent>
                </CardActionArea>
                <CardActions className="d-flex justify-content-center">
                    <Link
                        to={`/champions`}
                        className="OneChampButton">
                        <Button className="btn btn-warning px-4">Go Back</Button>
                    </Link>
                    <>
                        <Button className="btn btn-warning px-4 card-link" onClick={handleShow}>See stats!</Button>
                    </>
                </CardActions>
            </Card >

        </div >
    )
}

export default OneChampComponent