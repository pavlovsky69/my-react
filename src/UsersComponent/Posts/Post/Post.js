import React from 'react';
const Post = ({post}) => {
    const [id, userId, title, body]= post;
    return (
        <div>
            <div>id:{id}</div>
            <div>UserId: {userId}</div>
            <div>title:{title}</div>
            <div>body:{body}</div>
        </div>
    );
};

export {Post};