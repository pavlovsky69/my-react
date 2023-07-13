import React, {useEffect, useState} from 'react';
import {Post} from "./Post/Post";

const Posts = ({UserId}) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${UserId}/posts`).then(value => value.json()).then(posts => setPosts(posts))
    },
        [UserId])
    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post} UserId={UserId}/>)}
        </div>
    );
};
export {Posts};

