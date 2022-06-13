import react, {useState} from "react";
import Comment from "./Comment";

function CommentArea({comments}) {
    const [hideComment, setHideComment] = useState(false);

    function handleClick() {
        setHideComment(hideComment => !hideComment);
    }

    const commentDisplay = comments.map(commentObj => {
        return <Comment key={commentObj.id} user={commentObj.user} comment={commentObj.comment}/>
    })

    return (
        <div id="commentArea" style={{marginTop: '10px'}} >
            <button onClick={handleClick} >{hideComment ? "Hide" : "Show"} Comments</button>
            <hr></hr>
            <h2>{comments.length} Comments</h2>
            {hideComment ? commentDisplay : null}
        </div>
    );
}

export default CommentArea;