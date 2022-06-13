import react, {useState} from "react";

function Votes({upvotes, downvotes}) {
    const [likes, setLikes] = useState(upvotes);
    const [dislikes, setDislikes] = useState(downvotes);

    function handleLikeClick() {
        setLikes(likes => likes + 1);
    }

    function handleDislikeClick() {
        setDislikes(dislikes => dislikes + 1);
    }

    return (
        <div id='votes'>
            <button id='likes' onClick={handleLikeClick}>{likes} 👍</button>
            <button id='dislikes' onClick={handleDislikeClick}>{dislikes} 👎</button>
        </div>
    );
}

export default Votes;