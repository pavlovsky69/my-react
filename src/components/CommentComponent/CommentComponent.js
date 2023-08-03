import React from 'react';

const CommentComponent = ({comment}) => {
    const {id, name, email, body}=comment;
    return (
        <div>
            <div>id_comment:{id}</div>
            <div>name_comment:{name}</div>
            <div>email:{email}</div>
            <div>body:{body}</div>
        </div>
    );
};

export {CommentComponent};