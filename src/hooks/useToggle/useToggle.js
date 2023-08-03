import React, {useEffect, useState} from 'react';


const useToggle = (setData, url) => {

    useEffect (() => {
        fetch (`https://jsonplaceholder.typicode.com/${url}`)
            .then (response => response.json ())
            .then (response => setData (response))
    }, [setData])
};

export default useToggle;
