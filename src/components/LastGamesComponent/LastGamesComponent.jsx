import * as React from 'react';
import './LastGamesComponent.css'
import { Tooltip, IconButton } from "@mui/material";
import { AutoGraph } from "@mui/icons-material";
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import AccessibleForwardIcon from '@mui/icons-material/AccessibleForward';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';

const LastGamesComponent = ({ foundMatches, name }) => {

    console.log('Partiditassssss', foundMatches)

    return (
        <>
            {
                foundMatches.map((match, index) => {
                    const teamsData = match.teamsData;
                    return (
                        <div className="lastGamesBox  text-center">

                            {
                                teamsData.map((data, index) => {
                                    const { playersData } = data
                                    return (playersData.map((player, index) => {
                                        if (player.summonerName === name) {
                                            return (
                                                <>
                                                    <Card sx={{ display: 'flex', background: 'none', color: 'white', boxShadow: 'none' }}>
                                                        <CardMedia
                                                            component="img"
                                                            sx={{ width: 250, }}
                                                            image={"http://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + player.championName + "_0.jpg"}
                                                            alt="Live from space album cover"
                                                        />
                                                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>

                                                            <CardContent sx={{ flex: '1 0 auto' }}>
                                                                <Typography component="div" variant="h5">
                                                                    {player.summonerName}
                                                                </Typography>
                                                                <Typography variant="subtitle1" component="div">
                                                                    {player.kills + "/" + player.deaths + "/" + player.assists}
                                                                </Typography>
                                                            </CardContent>
                                                            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                                                                <Tooltip title={"KDA - " + player.kda} arrow>
                                                                    <IconButton >
                                                                        <AutoGraph color='secondary' />
                                                                    </IconButton>
                                                                </Tooltip>
                                                                <Tooltip title={"Damage dealt to Champions - " + player.totalDamageDealtToChampions} arrow>
                                                                    <IconButton>
                                                                        <AccessibleForwardIcon color='error' />
                                                                    </IconButton>
                                                                </Tooltip>
                                                                <Tooltip title={"Damage taken - " + player.totalDamageTaken} arrow>
                                                                    <IconButton>
                                                                        <HealthAndSafetyIcon color='warning' />
                                                                    </IconButton>
                                                                </Tooltip>
                                                            </Box>
                                                        </Box>

                                                    </Card>


                                                </>
                                            )
                                        }
                                    })
                                    )

                                })

                            }

                        </div>
                    )
                })
            }
        </>
    )
}

export default LastGamesComponent