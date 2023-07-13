import React, {useEffect, useState} from 'react';
import {Post} from "./Post/Post";

const Posts = ({userId}) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`).then(value => value.json()).then(value => setPosts(value))
    }, [userId])
    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};







// const [posts, setPosts] = useState ([]);
//
// useEffect (() => {
//     fetch (`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
//         .then (value => value.json ())
//         .then (value => setPosts (value))
// }, [userId])
//
// return (
//     <div>
//         {posts.map (post => <Post key={post.id} userId={userId} post={post}/>)}
//     </div>
// );
// };
//
// export {Posts};