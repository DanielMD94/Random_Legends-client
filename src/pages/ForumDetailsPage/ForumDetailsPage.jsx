import './ForumDetailsPage.css'
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
        <div className='forumDetailsPage'>
            {
                loading
                    ?
                    <div className="poroSpinner d-flex justify-content-center">
                        <Spinner role='status'>
                            <video autoPlay muted loop plays-inline>
                                <source src="https://res.cloudinary.com/dalk1vcw9/video/upload/v1663272676/Poro_base_AN_idle3_o5p599.mp4" />
                            </video>
                        </Spinner>
                    </div>
                    :
                    <>
                        {/* {
                            specifictPost.canView &&
                            <button className="btn btn-danger" onClick={deletePost}>DELETE POST</button>
                        } */}
                        <div className="postAndComment">

                            <div className='col-6'>
                                <OnePostComponent postInfo={specifictPost} />
                                {
                                    specifictPost.canView &&
                                    <button className="btn btn-danger hola " onClick={deletePost}>DELETE POST</button>
                                }
                            </div>

                            <div className='commentsAndForm col-4'>
                                <ul className='fixedComment'>
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
                            </div>

                        </div>
                    </>
            }
        </div>
    )
}
export default ForumDetailsPage