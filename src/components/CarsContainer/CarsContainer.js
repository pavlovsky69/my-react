import React from 'react';
import {CarForm} from "./CarForm/CarForm";
import {Cars} from "./Cars/Cars";
import {useSelector} from "react-redux";

const CarsContainer = () => {
    const {isLoading} = useSelector(state => state.cars);
    return (
        <div>
            <CarForm/>
            <hr/>
            {isLoading && <h1>Loading...</h1>}
            <Cars/>
        </div>
    );
};

export {CarsContainer};