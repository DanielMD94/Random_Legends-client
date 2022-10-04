
import './OnePostComponent.css'


const OnePostComponent = ({ postInfo }) => {

    const { post, canView } = postInfo
    console.log(post)
    const { imgChamp, imgItems, title, description, user, } = post
    const { username, role } = user





    return (

        <div className="d-flex justify-content-center mt-4">
            <div className="col">
                <div className="card text-center">
                    <img src={imgChamp} className="card-img-top" alt="champImage" />
                    <div className="card-body d-flex justify-content-around">
                        {
                            imgItems.map((imgItem, i) => <img key={i} src={imgItem} alt="random-pick" />)

                        }
                    </div>
                </div>
            </div>
            <div className="card text-bg-dark mb-3" >
                <div className="card-header">Posted by: {username}
                    <p className="card-text">{role}</p>
                </div>
                <div className="card-body">
                    <p className="card-text">{description}</p>
                </div>
            </div>
        </div>
    )
}







export default OnePostComponent