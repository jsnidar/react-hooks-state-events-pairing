import React from 'react';

const DownVoteButton = ( { downVotes, handleVoteClick }) => {
    
    return (
        <button onClick={(e) => handleVoteClick(e.target.innerText)} >{downVotes} 👎</button>
    )
}

export default DownVoteButton;