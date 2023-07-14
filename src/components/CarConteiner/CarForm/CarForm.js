import React from 'react';
import {useForm} from "react-hook-form";

const CarForm = () => {
   const {register, handleSubmit: handleSubmit, reset, formState:{errors, isValid}} = useForm();
   const save =(data)=>{
       console.log (data);
   }
    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <label> <input type="text" placeholder={'brand'} {...register('brand')}/></label>
                <label> <input type="text" placeholder={'price'} {...register('price')}/></label>
                <label> <input type="text" placeholder={'year'} {...register('year')}/></label>
                <button>Save</button>
            </form>
        </div>
    );
};

export {CarForm};