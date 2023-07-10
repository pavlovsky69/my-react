import styles from "./PostComponent.module.scss"
import React from 'react';
import ButtonInfo from "./InfoPost/ButtonInfo/ButtonInfo";

const PostComponent = (props) => {
    const {post, handleClick}=props
    return (
        <div className={styles.container}>
            <h6>{post.id}</h6>
            <h6>{post.title}`</h6>
            <button className={styles.button1} onClick={()=>handleClick(<ButtonInfo/>)}></button>
        </div>
    )
}

export default PostComponent;

// <button onClick={()=>handleClick( `id: ${post.id}, title:${post.title}, text:${post.body}`)}>All information about post {post.id}</button>