import React from 'react';
import {Link} from "react-router-dom";
import {AppRoutes} from "../../../../Routing/AppRoutes";

const PostDetails = ({post}) => {
    const{userId, id, title, body}=post;
    return (
        <div>
            <div>userId:{userId}</div>
            <div>id:{id}</div>
            <div>title:{title}</div>
            <div>body:{body}</div>
            <Link  className={'buttonPost'} to={AppRoutes.COMMENTS}>Back to all comments
            </Link>
        </div>
    );
};

export {PostDetails};