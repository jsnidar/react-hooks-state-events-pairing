import { useState } from "react";
import video from "../data/video.js";
import CommentList from './CommentList'
import UpVoteButton from "./upVoteButton.js";
import DownVoteButton from "./downVoteButton.js";

function App() {
  
  console.log("Here's your data:", video);

  //set state for upvotes
  const [upVotes, setUpVotes] = useState(video.upvotes);
  //set state for downvotes
  const [downVotes, setDownVotes] = useState(video.downvotes);
  //set state for Show Comments button
  const [showComments, setShowComments] = useState(true)

  const handleVoteClick = (event) => {
    if (event.includes('👍')) {
      const newVoteCount = upVotes + 1
      setUpVotes(newVoteCount)
    }else{
      const newVoteCount = downVotes + 1
      setDownVotes(newVoteCount)
    }
  }

  const buttonText = showComments ? "Hide Comments" : 'Show Comments'
  const handleVisibleCommentsClick = (event) => {
    setShowComments(!showComments)
  }

  const renderCommentsSection = () => showComments ? <CommentList comments={video.comments} /> : null;

  return (
    //when the App loads display:
    //a video
    
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      {/* {details about the video} */}
      <div className="video-details">
        <h1>{video.title}</h1>
        <p>{video.views} Views | Uploaded {video.createdAt}</p>
        <UpVoteButton  handleVoteClick={handleVoteClick} upVotes={upVotes}/>
        <DownVoteButton  handleVoteClick={handleVoteClick} downVotes={downVotes}/>
        <br></br>
        <br></br>
        <button onClick={handleVisibleCommentsClick}>{buttonText}</button>
        <br></br>
      </div>
      <div>
      {/* {a list of all the comments} */}
       {renderCommentsSection()} 
      </div>
    </div> 
  );
}

export default App;
