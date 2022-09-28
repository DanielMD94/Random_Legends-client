import { useEffect, useState } from "react";
import RandomPickComponent from "../components/RandomPickComponent";
import IndexAxios from "../services/indexAxios";

const RandomPickPage = () => {
    const indexAxios = new IndexAxios()
    const [random, setRandom] = useState([])

    useEffect(() => {
        indexAxios.getRandomChampion()
            .then((randomImgs) => {
                setRandom(randomImgs);
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <div>
            {random.map((randomStuff) => {
                return (
                    <div className="col-4">
                        < RandomPickComponent
                            myChampion={randomStuff.image}
                        />
                    </div>
                )
            })}
        </div>
    )
};

export default RandomPickPage;
