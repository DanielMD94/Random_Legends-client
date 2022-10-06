
import './OnePostComponent.css'


const OnePostComponent = ({ postInfo }) => {

    const { post, canView } = postInfo
    const { imgChamp, imgItems, title, description, user, } = post
    const { username, role } = user

    return (

        <div className="postInfo mt-4">
            <div >
                <div className="card text-center">
                    <img src={imgChamp} className="card-img-top" alt="champImage" />
                    <div className="card-body d-flex justify-content-around">
                        {
                            imgItems.map((imgItem, i) => <img key={i} src={imgItem} alt="random-pick" />)

                        }
                    </div>
                </div>
            </div>
            <div className="card text-bg-dark mb-3 " >
                <div className="card-header text-center">Posted by: {username}
                    <p className="card-text">{role}</p>
                </div>
                <div className="card-body">
                    <p className="card-text text-center">{description}</p>
                </div>
            </div>
        </div>
    )
}







export default OnePostComponent