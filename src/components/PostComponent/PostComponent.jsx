import styles from "./PostComponent.module.scss"
import React from 'react';

const PostComponent = (props) => {
    const {post, handleClick}=props
    return (
        <div className={styles.container}>
            <h6>{post.id}</h6>
            <h6>{post.title}`</h6>
            <button onClick={()=>handleClick(post.body)}>All information about post {post.id}</button>
        </div>
    )
}

export default PostComponent;