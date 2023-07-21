import React, {useEffect, useState} from 'react';
import {Todo} from "./Todo/Todo";
import {todosService} from "../../apiService/todosService";

const Todos = () => {
    const [todos, setTodos]=useState([])
    useEffect(()=>{
        todosService.getAll().then(({data})=>setTodos(data))
        },[]
    )
    return (
        <div>
            {todos.map(todo=><Todo key={todo.id} todo={todo}/>)}
        </div>
    );
};

export {Todos};







// const Todos = () => {
//     const [todos, setTodos]=useState([])
//     useEffect(()=>{
//             fetch('https://jsonplaceholder.typicode.com/todos').then(value => value.json()).then(value => setTodos(value))
//         },[]
//     )
//     return (
//         <div>
//             {todos.map(todo=><Todo key={todo.id} todo={todo}/>)}
//         </div>
//     );
// };
//
// export {Todos};