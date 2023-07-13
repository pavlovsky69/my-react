import './App.css';
import React from "react"
import {useState} from "react";
import {UsersComponent} from "./UsersComponent/UsersComponent";
import {Posts} from "./UsersComponent/Posts/Posts";


const App =()=> {
    const [UserId, setUserId] = useState(null)
  return (
    <div className="App">
        <div>
        <UsersComponent setUserId={setUserId}/>
        <hr/>
        {UserId &&<Posts UserId={UserId}/>}
        </div>
    </div>

  );
}

export {App};