import UsersReducer, {UserActionTypes} from "../usersReducer";

export const userActions = {
    setUsers: (data) => ({type: UserActionTypes.SET_USERS, payload: data}),
    addUsers:(data)=>({type:UserActionTypes.ADD_USERS, payload:data}),
    setIsLoading: (isLoading) => ({type: UserActionTypes.SET_ISLOADING, payload: isLoading})
}