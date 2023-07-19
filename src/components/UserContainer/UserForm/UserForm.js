import React from 'react';
import {set, useForm} from "react-hook-form";
import {apiServices, UserServices} from "../../../services/apiServices";

const UserForm = ({setUsers}) => {
    const {register, reset, handleSubmit} = useForm ();
    const save = (user) => {
        apiServices.saveUsers(user, setUsers, reset)
        console.log(user);
        // UserServices.saveNewUsers(user, setUsers, reset)
    }




    return (
        <form onSubmit={handleSubmit (save)}>
            <label>name: <input type="text" placeholder={'name'}{...register ('name')}/></label>
            <label>username: <input type="text" placeholder={'username'} {...register ('username')}/></label>
            <label>email: <input type="text" placeholder={'email'} {...register ('email')}/></label>
            <label>city: <input type="text" placeholder={'city'} {...register ('address.city')}/></label>
            <button>save</button>
        </form>
    );
};

export {UserForm};


// const save = (user) => {
//     fetch ('https://jsonplaceholder.typicode.com/users', {
//         headers: {'Content-type': 'application/json'},
//         method: 'POST',
//         body: JSON.stringify (user)
//     }).then (value => value.json ())
//         .then (value => {
//             setUsers (prev => [...prev, value])
//             reset()
//         })
// }
