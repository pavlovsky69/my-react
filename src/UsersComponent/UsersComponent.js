import React from 'react';
import {User} from "./UserComponent/User";

const UsersComponent = ({users}) => {
    return (
        <div>
            {users.map(user=><User key={user.id} user={user}/>)}
        </div>
    );
};

export {UsersComponent};