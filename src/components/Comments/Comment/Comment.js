import React from 'react';
import {Link} from "react-router-dom";

const Comment = ({comment}) => {
    const {postId, id, name, email, body}=comment;
    return (
        <div>
            <div>postId:{postId}</div>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>email:{email}</div>
            <div>body:{body}</div>

            {/*<button onClick={()=> navigate('posts/1', {relative:'path'})}> Get Post</button>*/}
            <Link to={`/posts/${postId}`}>Post
            </Link>
        </div>
    );
};

export {Comment};