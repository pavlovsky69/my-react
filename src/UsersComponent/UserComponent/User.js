import React from 'react';
import {Company} from "./Company/Company";
import {UserAddress} from "./UserAddress/UserAddress";
import {UserDetails} from "./UserDetails/UserDetails";

const User = ({user}) => {
    return (
        <div>
            <UserDetails key={user.id} user={user}/>
            <UserAddress key={user.id} user={user}/>
            {/*<Company/>*/}
        </div>
    );
};

export {User};