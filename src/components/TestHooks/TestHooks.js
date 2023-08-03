import React, {useState} from 'react';

import {PostComponent} from "../PostComponent/PostComponent";
import useToggle from "../../hooks/useToggle/useToggle";
import {UserComponent} from "../UserComponent/UserComponent";
import {CommentComponent} from "../CommentComponent/CommentComponent";

const TestHooks = () => {
    const [posts, setPosts] = useState ([])
    const [users, setUsers] = useState ([])
    const [comments, setComments] = useState ([])


    useToggle (setUsers, 'users')
    useToggle (setPosts, 'posts')
    useToggle (setComments, 'comments')


    return (
        <div>
            {posts.map ((post) => <PostComponent key={post.id} post={post}/>)}
            {users.map ((user) => <UserComponent key={user.id} user={user}/>)}
            {comments.map ((comment) => <CommentComponent key={comment.id} comment={comment}/>)}
            <button>get post</button>

        </div>
    );
};

export {TestHooks};