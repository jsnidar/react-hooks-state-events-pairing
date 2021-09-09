import React, { useState } from 'react';
import Comment from './Comment';


const CommentList = ( {comments} ) => {
    const [searchValue, setSearchValue] = useState('')

    const searchBar = () => {
        return(
            <div>
                <br></br>
                <span>Search Comments by User</span>
                <input onChange={(e) => setSearchValue(e.target.value)}type='text' value={searchValue}placeholder='Enter Username here...'></input>
            </div>
         )};
    
    //this returns an array filtered by the searchValue. because it has .includes on a string it will include all values that contain that string.
    const sortedComments = comments.filter(comment => comment.user.includes(searchValue))
    //this variable adds the comments
    const createAllComments = sortedComments.map((comment) => <Comment key={comment.id} comment={comment.comment} user={comment.user}/>)
    
    
    return (
        <div>
            {searchBar()}
            {/* {I want to update this using state so that the number of comments matches the new length} */}
            <h2>{comments.length} Comments</h2>
            {createAllComments}
        </div>
    )
};

export default CommentList;