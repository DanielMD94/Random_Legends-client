import './OneChampComponent.css'
import { Link } from "react-router-dom"
import { useState } from "react";
import SkinsCarousel from "../SkinsCarouselComponent/SkinsCarouselComponent"
import { Card, Button, CardActionArea, CardActions, CardMedia, CardContent, Typography } from '@mui/material';
import StatsGraphicComponent from '../StatsGraphicComponent/StatsGraphicComponent';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { Modal } from 'react-bootstrap';


const OneChampComponent = ({ oneChamp }) => {
    const { stats } = oneChamp

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let smallStats = [
        { label: 'ATTACK', '': stats.attackdamage },
        { label: 'ARMOR', '': stats.armor },
        { label: 'MAGIC RESISTANCE', '': stats.spellblock },
    ]

    let bigStats = [
        { label: 'LIFE', '': stats.hp },
        { label: 'MANA', '': stats.mp },
        { label: 'MOVE SPEED', '': stats.movespeed }
    ]

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
                                <StatsGraphicComponent data={smallStats} />
                                <StatsGraphicComponent data={bigStats} />
                            </Modal.Body>
                            <Modal.Footer>
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



//  <Modal show={show} onHide={handleClose}
//                 size="lg"
//                 aria-labelledby="contained-modal-title-vcenter"
//                 centered>
//                 <Modal.Header closeButton>
//                     <Modal.Title id="contained-modal-title-vcenter">
//                         User update
//                     </Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <p className="text-dark text-center h2 mt-4">Editing as Admin: <span className="text-warning">{pg23.username} </span></p>
//                     <div className="d-flex align-items-center flex-column">
//                         <form onSubmit={update}>
//                             <div className="mb-3">
//                                 <label className="form-label text-dark">Username:</label>
//                                 <input type="text" name="username" onChange={updateUser} value={userForUpdate.username} className="form-control" />
//                                 <label className="form-label text-dark mt-3">Summoner Name:</label>
//                                 <input type="text" name="summonerName" onChange={updateUser} value={userForUpdate.summonerName} className="form-control" />
//                             </div>
//                             <select className="form-select mt-3" name="role" onChange={updateUser} aria-label="Default select example">
//                                 <option value="IRON">IRON</option>
//                                 <option value="BRONZE">BRONZE</option>
//                                 <option value="SILVER">SILVER</option>
//                                 <option value="GOLD">GOLD</option>
//                                 <option value="PLATINUM">PLATINUM</option>
//                                 <option value="DIAMOND">DIAMOND</option>
//                                 <option value="MASTER">MASTER</option>
//                                 <option value="GRANDMASTER">GRANDMASTER</option>
//                                 <option value="CHALLENGER">CHALLENGER</option>
//                             </select>
//                             <button type="submit" onClick={handleClose} className="btn btn-warning mt-3">Update!</button>
//                         </form>
//                     </div>
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button onClick={handleClose}>Close</Button>
//                 </Modal.Footer>
//             </Modal>