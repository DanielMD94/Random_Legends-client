import { useContext, useState } from "react";
import { AuthContext } from "../../context/auth.context";
import ForumAxios from "../../services/forumAxios";

const FormCommentComponent = ({ reload }) => {
    const { user } = useContext(AuthContext);
    const forumAxios = new ForumAxios()
    const [newComment, setNewComment] = useState({
        comment: ''
    });


    const createNewComment = (eventHTML) => {
        eventHTML.preventDefault();

        forumAxios.createComment(newComment).then((response) => {
            setNewComment({ comment: '' })
            reload.setRefresh(reload.specifictPost)
        })
            .catch((err) => console.log(err))
    };

    const updateNewComment = (eventHTML) => {
        const { name, value } = eventHTML.target;
        setNewComment({ ...newComment, [name]: value, user: user._id, post: reload.specifictPost.post._id });
    };

    return (
        <>
            <form onSubmit={createNewComment}>
                <div className="mt-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label text-light">Comment:</label>
                    <textarea className="form-control w-25" name="comment" onChange={updateNewComment} value={newComment.comment} rows="3"></textarea>
                </div>
                <div>
                    <button type="submit" className="btn btn-warning mt-3">Submit</button>
                </div>
            </form>
        </>
    )
}

export default FormCommentComponent