import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

const Post = () => {
    const [post, setPosts]=useState({})
    const params=useParams()
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`).then(value => value.json()).then(value =>setPosts(value))
    },[])
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