import React from 'react';
import {CarForm} from "./CarForm/CarForm";
import {Cars} from "./Cars/Cars";


const CarConteiner = () => {
    return (
        <div>
            <CarForm/>
            <hr/>
            <Cars/>
        </div>
    );
};

export {CarConteiner};