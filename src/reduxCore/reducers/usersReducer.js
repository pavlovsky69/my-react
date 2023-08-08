const initialState = {
    info: {},
    results: [],
    count: 0,
    error: "",
    isLoading: false
}

export const UserActionTypes = {
    SET_USERS: 'SET_USERS',
    ADD_USERS: 'ADD_USERS',
    SET_ERROR: 'SET_ERROR',
    BACK_USER: 'BACK_USER',
    SET_ISLOADING: 'SET_ISLOADING'
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case UserActionTypes.ADD_USERS:
            return {
                ...state,
                isLoading: false,
                count: state.count + 1,
                results: [
                    ...state.results,
                    ...action.payload.results
                ],
                info: action.payload.info
            }

        case UserActionTypes.SET_USERS:
            return {
                ...state,
                results: action.payload.results,
                info: action.payload.info,
                count: state.count + 1,
                isLoading: false
            }
        case UserActionTypes.SET_ERROR:
            return {
                ...state,
                error: action.payload
            }

        case UserActionTypes.BACK_USER: {
            return {
                ...state,
                results: [...state.results,
                    ...action.payload.results],
                info: action.payload.prevInfo,
                count: state.count - 1,
                isLoading: false
            }
        }
        default:
            return state
    }
}


export default usersReducer