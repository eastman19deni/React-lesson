import { useState } from "react"
import "./List.css"

function List() {
    const [comments, setComments] = useState("");
    const [commentsList, setCommentsList] = useState([])
    const [deletedComments, setDeletedComments] = useState([])
    const [commentId, setcommentsId] = useState(1)

    const updateId = () => {
        setcommentsId(commentId + 1)
    }

    const addComment = (event) =>{
        event.preventDefault()
        if (!comments.trim()) {return}
        setCommentsList([...commentsList, {id: commentId, text:comments}])
        updateId()
        setComments("")
    }

    const deleteComments = (id) => {
        setDeletedComments((prevDeletedComments) => {
          return [...prevDeletedComments, id];
        });
      };

    return(
        <div className="Usual">
            <div className="comments__add_box">
                <input type="text" className="comments__add_field" value={comments} onChange={(event) =>setComments(event.target.value)}/>
                <button className="btnAddComment" onClick={addComment}>Add Comment</button>
            </div>
            <div className="comment__list_box">
                <ul className="comment__list_items">
                    {commentsList.filter((comment) =>!deletedComments.includes(comment.id)).map((comments) =>(
                        <li className="comments__item" key={comments.id}>
                            <p className="comments__content">{comments.text}</p>
                            <button className="comments__button" onClick={() => deleteComments(comments.id)}>
                                Delete comment
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}


export default List