import React from "react";
import {PostComponent} from "../ClassComponentPost/PostComponent/PostComponent";
import {ClassComponentComment} from "./ClassComponentComment/ClassComponentComment";
class ClassComponentComments extends  React.Component{
    state = {
        data: []
    }

    setState(state, callback) {
        super.setState (state, callback);
    }

    async componentDidMount() {
        try{
            const response = await fetch ('https://jsonplaceholder.typicode.com/comments')
            const data =await  response.json();
            console.log(data);
            this.setState({data})
        }catch (err){
            console.log(err)
        }
    }

    render() {
        const {data}= this.state;
        return (
            <div>
                {data.map((comment)=><ClassComponentComment key={comment.id} comment={comment}/>)}
            </div>)
    }
}


export {ClassComponentComments};