import React from 'react';
import {AppRoutes} from "../../../Routing/AppRoutes";
import {Link, useParams} from "react-router-dom";

const Comment = ({comment, setPostId}) => {
    const {postId, id, name, email, body}=comment;

    return (
        <div>
            <div>postId:{postId}</div>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>email:{email}</div>
            <div>body:{body}</div>
            <button onClick={()=>setPostId(postId)}>Get Post</button>


            {/*<Link onClick={setPostId(postId)}*/}
            {/*    key={postId} to={buttonPost.route}>*/}
            {/*    {buttonPost.label}*/}
            {/*</Link>*/}
        </div>
    );
};

export {Comment};