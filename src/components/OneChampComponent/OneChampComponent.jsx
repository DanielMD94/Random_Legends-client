import './OneChampComponent.css'
import { Link } from "react-router-dom"
import SkinsCarousel from "../SkinsCarouselComponent/SkinsCarouselComponent"
import { Card, Button, CardActionArea, CardActions, CardMedia, CardContent, Typography } from '@mui/material';
import { ResponsiveRadar } from '@nivo/radar'
import theme from './radarTheme.json'

const OneChampComponent = ({ oneChamp }) => {
    const { stats } = oneChamp

    let data = [
        { label: 'ATTACK', '': stats.attackdamage },
        { label: 'ARMOR', '': stats.armor },
        { label: 'MAGIC RESISTANCE', '': stats.spellblock },
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
                                    <p className='h4 text-danger text-center'>Ally Tips</p>
                                    {oneChamp.allytips}
                                </Typography>
                                <Typography variant=" body3" color="text.dark">
                                    <p className='h4 text-danger text-center mt-4'>Enemy Tips</p>
                                    {oneChamp.enemytips}
                                </Typography>
                            </div>
                        </div>
                        <div className="championStatsRadar">
                            <ResponsiveRadar
                                data={data}
                                keys={['']}
                                indexBy="label"
                                margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
                                gridLabelOffset={36}
                                enableDotLabel={true}
                                theme={theme}
                                dotSize={10}
                                dotBorderWidth={8}
                                motionConfig="wobbly"
                            />
                        </div>
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



