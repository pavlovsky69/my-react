import UsersReducer, {UserActionTypes} from "../reducers/usersReducer";

export const userActions = {
    setUsers: (data) => ({type: UserActionTypes.SET_USERS, payload: data}),
    addUsers:(data)=>({type:UserActionTypes.ADD_USERS, payload:data}),
    setIsLoading: (isLoading) => ({type: UserActionTypes.SET_ISLOADING, payload: isLoading}),
    backUser:(data)=>({type:UserActionTypes.BACK_USER,payload: data})
}

export  const getRickMorty =()=>(dispatch)=>{
    dispatch (userActions.setIsLoading (true));
    fetch ('https://rickandmortyapi.com/api/character')
        .then (resp => resp.json ())
        .then (data => dispatch (userActions.setUsers (data)))
}


export  const getMoreData =(url)=>(dispatch)=>{
    dispatch (userActions.setIsLoading (true));
    fetch (url)
        .then (resp => resp.json ())
        .then (data => dispatch (userActions.setUsers (data)))
}