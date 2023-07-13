import React from 'react';
const Post = ({post}) => {
    const [id, userId, title, body]= post;
    return (
        <div>
            <hr/>
            <div>id:{id}</div>
            <div>UserId: {userId}</div>
            <div>title:{title}</div>
            <div>body:{body}</div>
            <hr/>
        </div>
    );
};

export {Post};