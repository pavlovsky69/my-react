import React from 'react';

const Comment = ({comment, setPostId}) => {
    const {postId, id, name, email, body}=comment;
    return (
        <div>
            <div>postId:{postId}</div>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>email:{email}</div>
            <div>body:{body}</div>
            <button onClick={()=>setPostId(postId)}>Get Post</button>
        </div>
    );
};

export {Comment};