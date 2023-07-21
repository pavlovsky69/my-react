import React from 'react';
import {Link} from "react-router-dom";
import './Comment.css'

const Comment = ({comment}) => {
    const {postId, id, name, email, body}=comment;
    return (
        <div>
            <div>postId:{postId}</div>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>email:{email}</div>
            <div>body:{body}</div>
            <Link className={'buttonComments'} to={`/posts/${postId}`}>More about post</Link>
        </div>
    );
};

export {Comment};