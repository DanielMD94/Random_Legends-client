import './OneChampComponent.css'
import { Link } from "react-router-dom"
import SkinsCarousel from "../SkinsCarouselComponent/SkinsCarouselComponent"
import { Card, Button, CardActionArea, CardActions, CardMedia, CardContent, Typography } from '@mui/material';
import StatsGraphicComponent from '../StatsGraphicComponent/StatsGraphicComponent';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';


const OneChampComponent = ({ oneChamp }) => {
    const { stats } = oneChamp

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
                        <StatsGraphicComponent data={smallStats} />

                        <StatsGraphicComponent data={bigStats} />
                    </CardContent>
                </CardActionArea>
                <CardActions className="d-flex justify-content-center">
                    <Link
                        to={`/champions`}
                        className="btn OneChampButton">
                        <Button className="btn btn-warning px-4 mt-3">Go Back</Button>
                    </Link>
                </CardActions>
            </Card >

        </div >
    )
}

export default OneChampComponent



