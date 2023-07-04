import PostComponent from './PostComponent/PostComponent.jsx';
import { useEffect, useState } from 'react';
import { logDOM } from '@testing-library/react';

export const PostContainer = () => {
    const [ posts, setPosts ] = useState();



    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((posts) => {
                setPosts(posts); })
                .catch((errors) => console.log(errors.response))
                    .finally(() => {
                        console.log('Promise finished')
                    });

            },[]);


    const handleClick = (value) => {
        // alert(`Posts details is ${value}`);
        return(
            console.log(`${value}`)
        )
    };

    return (
        <>
            {posts?.map((post, id) => {
                return (
                    <PostComponent
                        key={id}
                        post={post}
                        handleClick={handleClick}
                    />);
            })}
        </>);
};






