import './App.css';
import React, {useEffect, useState} from "react";
import {UsersComponent} from "./UsersComponent/UsersComponent";

const App =()=> {
  const [users, setUsers]=useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then((users)=>{
          setUsers(users);
        })
  },[]);



  return (
    <div className="App">
        {users.map(user=><UsersComponent key={user.id} user={user}/>)}
    </div>
  );
}

export {App};
