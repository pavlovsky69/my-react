import React, {useEffect, useState} from 'react';

const Post = ({postId}) => {
    const [post, setPosts]=useState({})
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(value => value.json()).then(value =>setPosts(value))
    },[postId])
    const{userId, id, title, body}=post;
    return (
        <div>
            <div>userId:{userId}</div>
            <div>id:{id}</div>
            <div>title:{title}</div>
            <div>body:{body}</div>
        </div>
    );
};

export {Post};