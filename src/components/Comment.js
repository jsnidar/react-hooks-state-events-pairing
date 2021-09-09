import React from 'react';

const Comment = ({ comment, user}) => {

    return (
        <>
            <h3>{user}</h3>
            <p>{comment}</p>
            <button>Remove Comment</button>
        </>
    )
}

export default Comment;