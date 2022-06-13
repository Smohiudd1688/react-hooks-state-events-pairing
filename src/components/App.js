import video from "../data/video.js";
import Header from "./Header.js";
import Votes from "./Votes.js";
import CommentArea from "./CommentArea.js";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title={video.title}
      />
      <Header title={video.title} views={video.views} date={video.createdAt} />
      <Votes upvotes={video.upvotes} downvotes={video.downvotes} />
      <CommentArea comments={video.comments} />
    </div>
  );
}

export default App;
