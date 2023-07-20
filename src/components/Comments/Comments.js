import React, {useEffect, useState} from 'react';
import {Comment} from "./Comment/Comment";
import {Posts} from "../Posts/Posts";

const Comments = () => {
    const [comments, setComments]=useState([]);
    const [postId, setPostId]=useState(null)
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/comments').then(value => value.json()).then(value => setComments(value));
    }, [])
    return (
        <div>
            {postId &&<Posts postId={postId}/>}
            {comments.map(comment=><Comment key={comment.id} comment={comment} setPostId={setPostId}/>)}
        </div>
    );
};

export {Comments};