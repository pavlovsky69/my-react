import {render} from "@testing-library/react";
import React from "react";

class ClassComponentComment extends React.Component {
    constructor(props) {
        super (props);
    }


    render() {
        return (
            <div>
                <div>postId: {this.props.comment.postId}</div>
                <div>id: {this.props.comment.id}</div>
                <div>name: {this.props.comment.name}</div>
                <div>email: {this.props.comment.email}</div>
                <div>body: {this.props.comment.body}</div>
                <hr/>
            </div>
        )
    }
}

export {ClassComponentComment}