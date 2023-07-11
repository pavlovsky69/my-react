import React from 'react';
import {User} from "./UserComponent/User";

const UsersComponent = ({user}) => {
    return (
        <div>
            <User key={user.id} user={user}/>
        </div>
    );
};

export {UsersComponent};