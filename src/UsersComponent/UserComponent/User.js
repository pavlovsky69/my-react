import React from 'react';
import {Company} from "./Company/Company";
import {UserAddress} from "./UserAddress/UserAddress";
import {UserDetails} from "./UserDetails/UserDetails";

const User = ({user, setUserId}) => {
    const {id, name, username, email, address, company, phone, website} = user;
    return (
        <div>
            <UserDetails data={{id, name, username, email, phone, website}} />
            <UserAddress address={address}/>
            <Company company={company}/>
            <button onClick={()=>setUserId(id)}>Get Posts</button>
        </div>
    );
};


export {User};