import axios from "axios";

// export const apiServices = {
//     saveUsers: (user, setUsers, reset) => {
//         fetch ('https://jsonplaceholder.typicode.com/users', {
//             headers: {'Content-type': 'application/json'},
//             method: 'POST',
//             body: JSON.stringify (user)
//         })
//             .then (value => value.json ())
//             .then (value => {
//                 setUsers (prev => [...prev, value])
//             })
//         reset ()
//     },
// }

// export const apiServices={
//     saveUsers: (user, setUsers, reset) => {
//         fetch ('https://jsonplaceholder.typicode.com/users', {
//             headers: {'Content-type': 'application/json'},
//             method: 'POST',
//             body: JSON.stringify (user)
//         }).then (value => value.json ())
//             .then (value => {
//                 setUsers (prev => [...prev, value])
//             })
//         reset()
//     }
// }



export const apiServices = {
    saveUsers: (user, setUsers, reset) => {
        axios({ method:'POST', url:'https://jsonplaceholder.typicode.com/users',data:{user}
    }
    ).then (value => {
                setUsers (prev => [...prev, value])
            })
        reset ()
    },
}








