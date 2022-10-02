
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import FormCommentComponent from "../../components/FormCommentComponent/FormCommentComponent";
import OnePostComponent from "../../components/OnePostComponent/OnePostComponent";
import ForumAxios from "../../services/forumAxios";

const ForumDetailsPage = () => {

    const { idPost } = useParams();
    const navigate = useNavigate()
    const forumAxios = new ForumAxios()
    const [specifictPost, setSpecifictPost] = useState(null)
    const [refresh, setRefresh] = useState(null)
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        forumAxios.onePost(idPost)
            .then((Onepost) => {
                setSpecifictPost(Onepost);
                setLoading(false)
            })
            .catch((err) => console.log(err))
    }, [refresh]);

    const deletePost = () => {
        forumAxios.deletePost(specifictPost.post._id)
            .then(() => navigate('/forum'))
            .catch((err) => console.log(err))
    }

    return (
        <>
            {
                loading
                    ?
                    <Spinner className="LoadingSpinner d-flex" animation='border' role='status'></Spinner>
                    :
                    <>
                        (
                        {
                            specifictPost.canView &&
                            <button className="btn btn-danger" onClick={deletePost}>DELETE POST</button>
                        }

                        )
                        <OnePostComponent postInfo={specifictPost} />
                        <ul>
                            {
                                specifictPost.post.comment.map(comment => {
                                    return (
                                        <div key={comment._id}>
                                            <h4>{comment.user.username}</h4>
                                            <li> {comment.comment} </li>
                                        </div>
                                    )
                                })
                            }
                        </ul>
                        <FormCommentComponent reload={{ setRefresh, specifictPost }} />
                    </>
            }
        </>
    )
}
export default ForumDetailsPage