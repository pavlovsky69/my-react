import React, {useState} from 'react';

import {PostComponent} from "../PostComponent/PostComponent";
import useToggle from "../../hooks/useToggle/useToggle";
import {UserComponent} from "../UserComponent/UserComponent";

const TestHooks = () => {
    const [posts, setPosts] = useState ([])
    const [users, setUsers] = useState ([])


    useToggle (setUsers, 'users')
    useToggle (setPosts, 'posts')


    return (
        <div>
            {posts.map ((post) => <PostComponent key={post.id} post={post}/>)}
            {users.map ((user) => <UserComponent key={user.id} user={user}/>)}

            <button>get post</button>

        </div>
    );
};

export {TestHooks};