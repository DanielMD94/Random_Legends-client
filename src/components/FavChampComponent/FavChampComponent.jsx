import { IconButton } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import ProfileAxios from "../../services/profileAxios"
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { amber } from '@mui/material/colors';
import './FavChampComponent.css'

const color = amber[700];


const FavChampComponent = ({ champId }) => {
    const { user, authentication } = useContext(AuthContext);

    const profileAxios = new ProfileAxios()



    const favChamp = () => {
        profileAxios.addFavChamp({ champId, fav: user?.favChamp.includes(champId) })
            .then(() => {
                authentication()
            })
            .catch((err) => console.log(err))
    }



    return (
        <>
            {
                user?.favChamp.includes(champId)
                    ? <IconButton onClick={favChamp} sx={{ color }} aria-label="add to shopping cart">
                        <FavoriteIcon id='ytb' />
                    </IconButton>
                    : <IconButton onClick={favChamp} sx={{ color }} aria-label="add to shopping cart">
                        <FavoriteBorderIcon id='ytb' />
                    </IconButton>

            }

            {/* {user?.favChamp.includes(champId) && <p>'FAV2'</p>} */}
        </>
    )

}

export default FavChampComponent