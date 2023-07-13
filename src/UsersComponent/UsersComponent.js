import React from 'react';
import {User} from "./UserComponent/User";

const UsersComponent = ({users, setUserId}) => {
    return (
        <div>
            {users.map(user=><User key={user.id} user={user} setUserId={setUserId}/>)}
        </div>
    );
};

export {UsersComponent};