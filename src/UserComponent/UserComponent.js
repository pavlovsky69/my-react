import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getMoreData, getRickMorty, userActions} from "../reduxCore/actions/userActions";

const UserComponent = () => {
    const dispatch = useDispatch ();
    const users = useSelector ((store) => store.users.results)
    const isLoading = useSelector ((store) => store.users.isLoading)
    const nextUrl = useSelector ((store) => store.users.info.next)

    // useEffect (() => {
    //     dispatch (userActions.setIsLoading (true));
    //     fetch ('https://rickandmortyapi.com/api/character')
    //         .then (resp => resp.json ())
    //         .then (data => dispatch (userActions.setUsers (data)))
    // }, []);



    useEffect (() => {
       dispatch(getRickMorty())
    }, []);




const getMore=()=>dispatch(getMoreData(nextUrl ))


    // const getMore = () => {
    //     dispatch (userActions.setIsLoading (true));
    //     fetch (nextUrl)
    //         .then (resp => resp.json ())
    //         .then (data => dispatch (userActions.addUsers(data)))
    // }

    const goBack = () => {
        dispatch(userActions.setIsLoading(true));
        fetch(nextUrl)
            .then(resp => resp.json())
            .then(data => dispatch(userActions.backUser(data)))
    }

    return (
        <div>
            {isLoading
                ?
                <h1>Loading...</h1>
                : <>
                    <p>{nextUrl}</p>
                    <p onClick={getMore} style={{cursor:"pointer"}}>Get next</p>
                    <p onClick={goBack} style={{cursor:"pointer"}}>Go back</p>
                    {users.map ((user) =>
                        (
                            <div key={user.id}>
                                <p>{user.name}</p>\
                                <img src={user.image} alt="" style={{width: 100, height: 100}}/>
                            </div>
                        )
                    )}
                </>
            }
        </div>
    );
};

export {UserComponent};