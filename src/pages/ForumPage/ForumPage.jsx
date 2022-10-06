import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import ForumAxios from "../../services/forumAxios"
import './ForumPage.css'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

const ForumPage = () => {

    const forumAxios = new ForumAxios()
    const [posts, setposts] = useState([]);

    useEffect(() => {
        forumAxios
            .allPost()
            .then((allPost) => {
                setposts(allPost)
            })
    }, [])

    return (
        <div className='forumAlign col-12'>
            <div className='forumPostContainer'>
                {
                    posts.map(post => {
                        return (
                            <Link className='forumPostLink' to={`/forum/${post._id}`} key={post._id}>
                                <div className="linkContent">
                                    <div>
                                        <img className="forumPostImage" src={post.imgChamp} />
                                    </div>
                                    <div className="forumPostTitle">
                                        {post.title}
                                    </div>
                                    <div className="forumEyeIcon">
                                        <RemoveRedEyeIcon />
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ForumPage