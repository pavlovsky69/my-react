import React from 'react';
import {Post} from "./Post/Post";
const Posts = () => {

    return (
        <div>
            {<Post/>}
        </div>
    );
};

export {Posts};














// import React, {useEffect, useState} from 'react';
// const Posts = ({postId}) => {
//     let [posts, setPosts] = useState([]);
//     useEffect(()=>{
//         fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(value => value.json()).then(value => setPosts(value));
//     },[])
//     return (
//         <div>
//             {posts.map}
//         </div>
//     );
// };
//
// export {Posts};