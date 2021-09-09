import React from 'react';

const UpVoteButton = ( { upVotes, handleVoteClick }) => {
    
    return (
        <button onClick={(e) => handleVoteClick(e.target.innerText)} >{upVotes} 👍</button>
    )
}

export default UpVoteButton;