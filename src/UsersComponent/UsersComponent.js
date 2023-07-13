import React, {useEffect, useState} from 'react';
import {User} from "./UserComponent/User";

const UsersComponent = ({setUserId}) => {
    const [users, setUsers]=useState([]);
    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json())
          .then((users)=>{
            setUsers(users);
          })
    },[]);

    return (
        <div>
            {users.map(user=><User key={user.id} user={user} setUserId={setUserId}/>)}
        </div>
    );
};

export {UsersComponent};