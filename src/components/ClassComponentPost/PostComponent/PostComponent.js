import React from "react";

class PostComponent extends React.Component {
    constructor(props) {
        super (props);
    }
        render ()
        {
            return (
                <div>
                    <div>id: {this.props.post.id}, Title: {this.props.post.title}</div>
                    <div>Body: {this.props.post.body}</div>
                    <div>Post user: {this.props.post.userId}</div>
                    <hr/>
                </div>
            )
        }
    }



export {PostComponent};