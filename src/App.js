import './App.css';
import React, {useEffect, useState} from "react";
import {UsersComponent} from "./UsersComponent/UsersComponent";
import {Posts} from "./Posts/Posts";


const App =()=> {
  const [users, setUsers]=useState([]);
  const [userId, setUserId]=useState(null)

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then((users)=>{
          setUsers(users);
        })
  },[]);


  return (
    <div className="App">
        <UsersComponent setUserId={setUserId} users={users} />
        <hr/>
        {userId && <Posts userId={userId}/>}
    </div>

  );
}

export {App};