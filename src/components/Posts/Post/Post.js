import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {AppRoutes} from "../../../Routing/AppRoutes";
import './Post.css'
import {postsService} from "../../../apiService/postsService";
import axios from "axios";

const Post = () => {
    const [post, setPosts]=useState({})
    const params=useParams()

    // useEffect(()=>{
    //   postsService.getAll().then(({data})=> setPosts(data));
    // },[])


    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`).then(({data})=> setPosts(data))
    },[])

    const{userId, id, title, body}=post;
    return (
        <div>
            <div>userId:{userId}</div>
            <div>id:{id}</div>
            <div>title:{title}</div>
            <div>body:{body}</div>
            <Link  className={'buttonPost'} to={AppRoutes.COMMENTS}>Back to all comments
            </Link>
        </div>
    );
};

export {Post};









// const Post = () => {
//     const [post, setPosts]=useState({})
//     const params=useParams()
//     useEffect(()=>{
//         fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`).then(value => value.json()).then(value =>setPosts(value))
//     },[])
//     const{userId, id, title, body}=post;
//     return (
//         <div>
//             <div>userId:{userId}</div>
//             <div>id:{id}</div>
//             <div>title:{title}</div>
//             <div>body:{body}</div>
//             <Link  className={'buttonPost'} to={AppRoutes.COMMENTS}>Back to all comments
//             </Link>
//         </div>
//     );
// };
//
// export {Post};