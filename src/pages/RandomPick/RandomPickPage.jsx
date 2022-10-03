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
            <Spinner animation='border' role='status'>
                <span className='visually-hidden'>Loading...</span>
            </Spinner>
        );
    }

    return (
        <>
            <Box className="randomBox">
                <Grid2 className='randomPickBox' container spacing={0}>
                    <Grid2 xs={12} sm={12} md={8}>
                        < RandomPickComponent
                            myChampion={{ random, setRefresh }}
                        />
                    </Grid2>
                    <Grid2 id="randomPickPosts" sm={12} md={4}>
                        <PostComponent itemsAndChamp={random} />
                    </Grid2>
                </Grid2 >
            </Box>
        </>
    )
};

export default RandomPickPage;
