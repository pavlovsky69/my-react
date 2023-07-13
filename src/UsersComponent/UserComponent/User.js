import React from 'react';
import {Company} from "./Company/Company";
import {UserAddress} from "./UserAddress/UserAddress";
import {UserDetails} from "./UserDetails/UserDetails";

const User = ({user, setUserId}) => {
    const {id, name, username, email, address, company, phone, website} = user;
    return (
        <div>
            <div>{name}</div>
            <UserDetails data={{id, name, username, email, phone, website}}/>
            <UserAddress address={address}/>
            <Company company={company}/>
            <button onClick={ () => setUserId(id)}>getPosts</button>
        </div>
    );
};


export {User};