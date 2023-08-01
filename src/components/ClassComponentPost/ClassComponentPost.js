import React from "react";
import {UserComponent} from "./UserComponent/UserComponent";
class ClassComponentPost extends React.Component {

    state = {
        data: []
    }

    async componentDidMount() {
        try{
            const response = await fetch ('https://jsonplaceholder.typicode.com/posts')
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
                {data.map((post)=><UserComponent key={post.id} post={post}/>
                )}
            </div>

        )
    }
}

export {ClassComponentPost};