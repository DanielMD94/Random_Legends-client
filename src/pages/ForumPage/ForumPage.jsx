import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import ForumAxios from "../../services/forumAxios"
import './ForumPage.css'

const ForumPage = () => {

    const forumAxios = new ForumAxios()
    const [posts, setposts] = useState([]);

    useEffect(() => {
        forumAxios.allPost()
            .then((allPost) => {
                setposts(allPost)

            })

    }, [])


    return (
        <>
            <div className="d-flex justify-content-center">
                <ol className="container" id="lista">
                    <div className="col">
                        {
                            posts.map(post => {
                                return <Link to={`/forum/${post._id}`} key={post._id}>  <li><p>{post.title}</p></li></Link>
                            })
                        }
                    </div>
                </ol>
            </div>

            <div className="d-flex justify-content-center">
                {/* <video autoplay muted loop plays-inline>
                    <source src="https://res.cloudinary.com/dalk1vcw9/video/upload/v1663272676/Poro_base_AN_idle3_o5p599.mp4">
                </video> */}
            </div>


        </>
    )
}

export default ForumPage