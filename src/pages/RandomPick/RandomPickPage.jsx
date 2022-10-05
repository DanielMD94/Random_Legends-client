import "./RandomPickPage.css"
import { Box } from "@mui/material";
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import PostComponent from "../../components/PostComponent/PostComponent";
import RandomPickComponent from "../../components/RandomPickComponent/RandomPickComponent";
import IndexAxios from "../../services/indexAxios";

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
            <div className="poroSpinner d-flex justify-content-center">
                <Spinner role='status'>
                    <video autoPlay muted loop plays-inline>
                        <source src="https://res.cloudinary.com/dalk1vcw9/video/upload/v1663272676/Poro_base_AN_idle3_o5p599.mp4" />
                    </video>
                </Spinner>
            </div>
        );
    }

    return (

        <Box className="randomBox">
            <Grid2 className='randomPickBox d-flex justify-content-center mt-4' container spacing={4}>
                <Grid2 xs={12} sm={12} md={6}>
                    < RandomPickComponent
                        myChampion={{ random, setRefresh }}
                    />
                </Grid2>
                <Grid2 id="randomPickPosts" xs={12} sm={12} md={4}>
                    <PostComponent itemsAndChamp={random} />
                </Grid2>
            </Grid2 >
        </Box>

    )
};

export default RandomPickPage;
