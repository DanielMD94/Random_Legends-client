import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import ForumAxios from "../../services/forumAxios";
import './PostComponent.css'


const PostComponent = ({ itemsAndChamp }) => {
    const { user, isLoading, isLoggedIn, logOut } = useContext(AuthContext);
    const { items, image } = itemsAndChamp

    const forumAxios = new ForumAxios()
    const [newPost, setNewPost] = useState({});
    const navigate = useNavigate();
    // Estad de error

    const createNewPost = (eventHTML) => {
        eventHTML.preventDefault();
        forumAxios.createPost(newPost).then((response) => {
            console.log(response);
            // navigate('/forum')
        });
    };

    const updateNewPost = (eventHTML) => {
        const { name, value } = eventHTML.target;
        setNewPost({ ...newPost, [name]: value, user: user._id });
    };



    return (
        <>
            <form onSubmit={createNewPost}>
                <div>
                    <label htmlFor="" className="form-label text-light">Title:</label>
                    <input type="text" name="title" onChange={updateNewPost} className="form-control w-25" />
                </div>
                <div className="mt-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label text-light">Comment your Random
                        Pick!!</label>
                    <textarea className="form-control w-25" name="description" onChange={updateNewPost} rows="3"></textarea>
                </div>
                <div>
                    {
                        items.map((item, i) => {
                            return <input key={i} type="hidden" className="form-control" name="imgItems" onChange={updateNewPost} value={item} />
                        })
                    }


                    <input type="hidden" className="form-control" name="imgChamp" onChange={updateNewPost} value=
                        {image} />
                    <button type="submit" className="btn btn-warning mt-3">Submit</button>
                </div>
            </form>
        </>
    )
}
export default PostComponent