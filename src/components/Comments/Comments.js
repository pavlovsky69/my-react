import React, {useEffect, useState} from 'react';
import {Comment} from "./Comment/Comment";
import {commentsService} from "../../apiService/commentsService";

const Comments = () => {
    const [comments, setComments]=useState([]);
    useEffect(()=>{
        commentsService.getAll().then(({data})=>setComments(data));
    }, [])
    return (
        <div>
            {comments.map(comment=><Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {Comments};





// const Comments = () => {
//     const [comments, setComments]=useState([]);
//     useEffect(()=>{
//         fetch('https://jsonplaceholder.typicode.com/comments').then(value => value.json()).then(value => setComments(value));
//     }, [])
//     return (
//         <div>
//             {comments.map(comment=><Comment key={comment.id} comment={comment}/>)}
//         </div>
//     );
// };
//
// export {Comments};