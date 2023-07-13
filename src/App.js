import './App.css';
import React from "react"
import {useState} from "react";
import {UsersComponent} from "./UsersComponent/UsersComponent";
import {Posts} from "./PostComponent/Posts/Posts";


const App =()=> {
    const [userId, setUserId] = useState(null)
  return (
    <div className="App">
        <UsersComponent setUserId={setUserId}/>
        <hr/>
        {userId &&<Posts userId={userId}/>}
    </div>

  );
}

export {App};